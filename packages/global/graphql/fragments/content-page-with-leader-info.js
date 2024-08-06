const gql = require('graphql-tag');

const factory = ({ leadersAlias } = {}) => {
  const fragment = gql`
  fragment ContentPageWithLeaderInfoFragment on Content {
    id
    name
    teaser(input: { useFallback: false, maxLength: null })
    body(input: { useLinkInjectedBody: false })
    published
    taxonomyIds
    siteContext {
      path
      canonicalUrl
    }
    company {
      id
      name
      siteContext {
        path
      }
      enableRmi
      primaryImage {
        id
        src
        alt
        caption
        credit
        isLogo
      }
    }
    primarySection {
      id
      name
      alias
      canonicalPath
      hierarchy {
        id
        name
        alias
        canonicalPath
      }
    }
    primaryImage {
      id
      src(input: { useCropRectangle: true, options: { auto: "format,compress" } })
      cropRectangle {
        width
        height
      }
      alt
      caption
      credit
      isLogo
      cropDimensions {
        aspectRatio
      }
      primaryImageDisplay
    }
    gating {
      surveyType
      surveyId
    }
    userRegistration {
      isCurrentlyRequired
      accessLevels
    }
    ... on ContentVideo {
      embedCode
      transcript
    }
    ... on ContentNews {
      source
      byline
    }
    ... on ContentBlog {
      byline: customAttribute(input: { path: "byline" })
    }
    ... on ContentEvent {
      endDate
      startDate
    }
    ... on ContentArticle {
      byline: customAttribute(input: { path: "byline" })
      sidebars
    }
    ... on ContentPodcast {
      transcript
    }
    ... on ContentWebinar {
      linkUrl
      startDate
      transcript
      sponsors {
        edges {
          node {
            id
            name
            siteContext {
              path
            }
          }
        }
      }
    }
    ... on Addressable {
      address1
      address2
      cityStateZip
      country
    }
    ... on Contactable {
      phone
      tollfree
      fax
      website
      title
      mobile
      publicEmail
    }
    ... on ContentCompany {
      email

      isLeader: hasWebsiteSchedule(input: { sectionAlias: "${leadersAlias}" })

      youtube {
        username
        channelId
        url
      }

      # kv data
      yearsInOperation
      numberOfEmployees
      salesChannels
      salesRegion

      # long text data
      productSummary
      servicesProvided
      serviceInformation
      trainingInformation
      warrantyInformation

      contacts: publicContacts {
        edges {
          node {
            id
            name
            title
            publicEmail
            primaryImage {
              id
              src(input: { options: { auto: "format,compress", q: 70, h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
            }
          }
        }
      }

      videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
        edges {
          node {
            id
            url
            title
            published
            thumbnail(input: { size: high })
          }
        }
      }
    }
    ... on SocialLinkable {
      socialLinks {
        provider
        url
        label
      }
    }
    ... on Media {
      fileSrc
    }
    ... on Inquirable {
      enableRmi
    }
    ... on Authorable {
      authors(input: {sort: { order: values }}) {
        edges {
          node {
            id
            name
            type
            siteContext {
              path
            }
          }
        }
      }
      contributors {
        edges {
          node {
            id
            name
            type
            siteContext {
              path
            }
          }
        }
      }
      photographers {
        edges {
          node {
            id
            name
            type
            siteContext {
              path
            }
          }
        }
      }
    }
    images(input: { pagination: { limit: 100 }, sort: { order: values } }) {
      edges {
        node {
          id
          src
          alt
          displayName
          caption
          credit
          isLogo
        }
      }
    }
  }
  `;
  fragment.factory = factory;
  return fragment;
};
module.exports = factory();
