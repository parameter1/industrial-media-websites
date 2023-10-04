const { asyncRoute, isFunction: isFn } = require('@parameter1/base-cms-utils');
const { getAsArray, get } = require('@parameter1/base-cms-object-path');
const gql = require('graphql-tag');
const { encode } = require('html-entities');
const dayjs = require('@parameter1/base-cms-dayjs');
const { xmlEntities: xml } = require('@parameter1/base-cms-html');

module.exports = (app) => {
  const parseEmbeddedMedia = get(app, 'locals.parseEmbeddedMedia');
  const renderBody = isFn(parseEmbeddedMedia) ? parseEmbeddedMedia : (v) => v;
  app.get('/feed', asyncRoute(async (req, res) => {
    const FEED = gql`
      query Feed($input: WebsiteScheduledContentQueryInput = {}, $siteId: ObjectID!) {
        websiteSite(input: { id: $siteId }) {
          id
          shortName
          name
          url
        }
        websiteScheduledContent(input: $input) {
          totalCount
          edges {
            node {
              id
              name
              teaser
              body
              publishedDate(input: { format: "ddd, DD MMM YYYY hh:mm:ss ZZ" })
              labels
              siteContext {
                url
              }
              company {
                id
                name
              }
              primarySite {
                id
                shortName
              }
              primaryImage {
                id
                src(input: { options: { auto: "format,compress", q: 70 } })
                alt
                isLogo
              }
              websiteSchedules {
                section {
                  id
                  name
                }
              }
              ... on Authorable {
                authors(input: {sort: { order: values }}) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const limit = 10;
    const skip = 0;
    const input = {
      includeContentTypes: ['Article'],
      pagination: {
        limit,
        skip,
      },
    };

    const siteId = req.app.locals.config.website('id');
    const variables = { input, siteId };
    const { data } = await req.apollo.query({ query: FEED, variables });
    const { websiteSite: site } = data;
    const siteUrl = `https://${site.url}`;
    const encodeOptions = { mode: 'specialChars', level: 'html5' };
    const siteName = encode(site.name, encodeOptions);
    const lastBuildDate = dayjs().format('ddd, DD MMM YYYY hh:mm:ss ZZ');

    const items = getAsArray(data, 'websiteScheduledContent.edges').map((edge) => {
      const { node } = edge;
      const itemName = encode(node.name, encodeOptions);
      const itemUrl = get(node, 'siteContext.url');
      const itemAuthors = getAsArray(node, 'authors.edges').map((o) => get(o, 'node.name')).filter((o) => o).join(', ');
      const itemPubDate = node.publishedDate;
      const itemTeaser = node.teaser;
      const itemBody = renderBody(node.body, res, { lazyloadImages: false });
      const schedules = new Set(getAsArray(node, 'websiteSchedules')
        .map((o) => get(o, 'section.name'))
        .filter((name) => name !== 'Home')
        .map((s) => `<category><![CDATA[${s}]]></category>`));
      const item = [
        '<item>',
        `<title>${itemName}</title>`,
        `<link>${itemUrl}</link>`,
        `<dc:creator><![CDATA[${itemAuthors}]]></dc:creator>`,
        `<pubDate>${itemPubDate}</pubDate>`,
        ...schedules,
        `<guid isPermaLink="false">${siteUrl}/${node.id}</guid>`,
        `<description><![CDATA[${itemTeaser}]]></description>`,
        `<content:encoded><![CDATA[${itemBody}]]></content:encoded>`,
        '</item>',
      ];
      return item.join('\n');
    });

    const rssAttributes = [
      'version="2.0"',
      'xmlns:content="http://purl.org/rss/1.0/modules/content/"',
      'xmlns:wfw="http://wellformedweb.org/CommentAPI/"',
      'xmlns:dc="http://purl.org/dc/elements/1.1/"',
      'xmlns:atom="http://www.w3.org/2005/Atom"',
      'xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"',
      'xmlns:slash="http://purl.org/rss/1.0/modules/slash/"',
    ].join(' ');
    const parts = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      `<rss ${rssAttributes}>`,
      '<channel>',
      `<title>${siteName}</title>`,
      `<atom:link href="${siteUrl}/feed/" rel="self" type="application/rss+xml" />`,
      `<link>${siteUrl}</link>`,
      `<description>${siteName}</description>`,
      `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
      '<language>en-US</language>',
      '<sy:updatePeriod>hourly</sy:updatePeriod>',
      '<sy:updateFrequency>1</sy:updateFrequency>',
      ...items,
      '</channel>',
      '</rss>',
    ];
    res.set('Content-Type', 'application/rss+xml');
    res.send(parts.join('\n'));
  }));

  app.get('/yahoo-finance-feed', asyncRoute(async (req, res) => {
    const yahooFinanceFeed = gql`
      query YahooFinanceFeed($input: AllPublishedContentQueryInput = {}, $siteId: ObjectID!) {
        websiteSite(input: { id: $siteId }) {
          id
          shortName
          name
          url
        }
        allPublishedContent(input: $input) {
          edges {
            node {
              id
              seoTitle
              teaser(input: { useFallback: false, maxLength: null })
              siteContext {
                url
              }
              publishedDate(input: { format: "ddd, DD MMM YYYY HH:mm:ss ZZ" })
              primarySection {
                id
                alias
                name
                fullName
              }
              images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
                edges {
                  node {
                    id
                    src(input: { options: { auto: "format,compress", q: 70 } })
                    caption
                    credit
                  }
                }
              }
              ... on Authorable {
                authors {
                  edges {
                    node {
                      id
                      firstName
                      lastName
                    }
                  }
                }
              }
              ... on ContentVideo {
                embedSrc
              }
              body
            }
          }
        }
      }
    `;

    const limit = 10;
    const skip = 0;
    const input = {
      includeTaxonomyIds: [3199135],
      pagination: {
        limit,
        skip,
      },
    };

    const siteId = req.app.locals.config.website('id');
    const variables = { input, siteId };
    const { data } = await req.apollo.query({ query: yahooFinanceFeed, variables });
    const { websiteSite: site } = data;
    const siteUrl = `https://${site.url}`;
    const encodeOptions = { mode: 'specialChars', level: 'html5' };
    const siteName = encode(site.name, encodeOptions);
    const lastBuildDate = dayjs().format('ddd, DD MMM YYYY hh:mm:ss ZZ');

    const items = getAsArray(data, 'allPublishedContent.edges').map((edge) => {
      const { node } = edge;
      const itemName = encode(node.seoTitle, encodeOptions);
      const itemUrl = get(node, 'siteContext.url');
      const authorStrings = getAsArray(node, 'authors.edges').reduce((arr, { node: authorNode }) => {
        const { firstName, lastName } = authorNode;

        const nameParts = [];
        if (firstName) nameParts.push(firstName);
        if (lastName) nameParts.push(lastName);

        if (nameParts.length) arr.push(`${nameParts.join(' ')}`);

        return arr;
      }, []);
      const itemPubDate = node.publishedDate;
      const itemTeaser = node.teaser;
      const itemBody = renderBody(node.body, res, { lazyloadImages: false });
      const item = [
        '<item>',
        `<title>${itemName}</title>`,
        `<link>${itemUrl}</link>`,
        `<guid isPermaLink="true">${itemUrl}</guid>`,
        `<description><![CDATA[${itemTeaser}]]></description>`,
        `<pubDate>${itemPubDate}</pubDate>`,
      ];
      if (authorStrings.length) item.push(`<author>${authorStrings.join(', ')}</author>`);
      if (get(node, 'primarySection') && get(node, 'primarySection.alias') !== 'home') {
        item.push(`<category domain="${siteUrl}">${xml.encode(get(node, 'primarySection.fullName').replace('>', '/'))}</category>`);
      }
      const imageMediaTags = getAsArray(node, 'images.edges').reduce((arr, { node: imageNode }) => {
        const { src, caption, credit } = imageNode;
        if (src) {
          arr.push(`<media:content url="${src.replace(/&([a-z0-9-_]+=)/gi, '&amp;$1')}" type="image/png">\n<media:description>${caption}</media:description>\n<media:credit>${credit}</media:credit>\n</media:content>`);
        }
        return arr;
      }, []);
      if (imageMediaTags.length) item.push(...imageMediaTags);
      item.push(`<content:encoded><![CDATA[${itemBody}]]></content:encoded>`);
      item.push('</item>');
      return item.join('\n');
    });

    const rssAttributes = [
      'version="2.0"',
      'xmlns:content="http://purl.org/rss/1.0/modules/content/"',
      'xmlns:wfw="http://wellformedweb.org/CommentAPI/"',
      'xmlns:dc="http://purl.org/dc/elements/1.1/"',
      'xmlns:atom="http://www.w3.org/2005/Atom"',
      'xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"',
      'xmlns:slash="http://purl.org/rss/1.0/modules/slash/"',
      'xmlns:media="http://search.yahoo.com/mrss/"',
    ].join(' ');
    const parts = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      `<rss ${rssAttributes}>`,
      '<channel>',
      `<title>${siteName}</title>`,
      `<atom:link href="${siteUrl}/yahoo-finance-feed/" rel="self" type="application/rss+xml" />`,
      `<link>${siteUrl}</link>`,
      `<description>${siteName} Yahoo Finance Feed</description>`,
      `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
      '<language>en-US</language>',
      '<sy:updatePeriod>hourly</sy:updatePeriod>',
      '<sy:updateFrequency>1</sy:updateFrequency>',
      ...items,
      '</channel>',
      '</rss>',
    ];
    res.set('Content-Type', 'application/rss+xml');
    res.send(parts.join('\n'));
  }));
};
