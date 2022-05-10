const privacyPolicy = require('./privacy-policy');

const baseConfig = {
  action: 'https://industrialmedia.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'ien_signup' },
  ],
};

const defaults = {
  name: '@TODO: Newsletter.js Default Config',
  description: '@TODO: Newsletter.js Default Config Description',
  defaultNewsletter: {
    deploymentTypeId: 41,
    name: 'IEN Today Newsletter',
    eventCategory: 'IEN Today Subscription',
  },
  privacyPolicy,
  newsletters: [
    {
      deploymentTypeId: 42,
      name: 'IEN Update Newsletter',
      description: 'IEN Today (morning edition) and IEN Update (afternoon edition) provide unique content that help answer the challenges industrial engineers face every day. With a combination of news, articles, blogs, videos, technical content, and new product information, each newsletter is focused on the most recent developments impacting the time, cost, market conditions, and regulatory battles industrial engineers constantly face.',
      eventCategory: 'IEN Update Subscription',
    },
    {
      deploymentTypeId: 45,
      name: 'Industrial Technology Today Newsletter',
      description: 'The industrial marketplace continues to embrace IoT and data-driven technology targeting rapid production times, exacting quality controls, and greater overall enterprise efficiency that saves time and money. This daily newsletter delivers the latest news, products, and commentary influencing the ever-evolving role of automation, controls engineering, software and systems integration, connectivity, and machine building.',
      eventCategory: 'Industrial Technology Today Subscription',
    },
    {
      deploymentTypeId: 40,
      name: 'Engineering News Today Newsletter',
      description: 'Engineers solve problems by either fixing what is broken, designing a better approach, or improving systems currently in place. This daily newsletter provides the resources, news, and product information that assists designers, industrial engineers, machine builders, and system integrators in finding and implementing the best solutions available.',
      eventCategory: 'Engineering News Today Subscription',
    },
    {
      deploymentTypeId: 44,
      name: 'Industrial Management Today Newsletter',
      description: 'Efficiency can be measured in a number of ways in the industrial sector. This daily newsletter provides facility operations, maintenance, and reliability managers with the information they need to make informed process, product, and purchasing decisions that will help ensure higher end-product quality and facility profitability.',
      eventCategory: 'Industrial Management Today Subscription',
    },
    {
      deploymentTypeId: 46,
      name: 'Product Showcase Newsletter',
      description: 'Receive a bi-monthly overview of the top products featured in our print edition of IEN, featuring an array of compelling benefits, photos, and contact details for purchasing.',
      eventCategory: 'Product Showcase Subscription',
    },
    {
      deploymentTypeId: 45,
      name: 'Industrial Software & Technology Newsletter',
      description: 'As the application and analysis of data from various internal and external sources plays an increasingly prominent role in the industrial marketplace, the selection, implementation and application of software and supporting technologies has never been more important. This newsletter delivers the latest news, products, and blogs focused on how ERP, CMMS, PLM, e-Commerce, CAM, CAD and other software platforms and related technologies can ensure competitiveness in the age of Big Data and the IIoT.',
      eventCategory: 'Industrial Software & Technology Subscription',
    },
    {
      deploymentTypeId: 23,
      name: 'Digital Edition',
      description: 'Receive a digital version of our bi-monthly magazine.',
      eventCategory: 'Digital Edition Subscription',
    },
    {
      deploymentTypeId: 46,
      name: 'Video Showcase Newsletter',
      description: 'Enjoy technology demos from leading manufacturers in the industrial market. This monthly showcase features the newest product videos featured on the IEN website.',
      eventCategory: 'Video Showcase Subscription',
    },
    {
      deploymentTypeId: 43,
      name: 'IEN Weekly Newsletter',
      description: 'IEN Weekly provides a recap of the week\'s top manufacturing headlines. It includes unique content that helps answer the challenges industrial professionals face every day.',
      eventCategory: 'IEN Weekly Subscription',
    },
  ],
  demographic: {
    id: 86,
    label: 'Please fill in the ONE category which best describes your business?',
    values: [
      { id: 457, label: 'Administration' },
      { id: 458, label: 'Executive Management' },
      { id: 459, label: 'Finance' },
      { id: 460, label: 'IT' },
      { id: 461, label: 'Maintenance, Operations, Management' },
      { id: 462, label: 'Product Development' },
      { id: 463, label: 'Purchasing' },
      { id: 465, label: 'Safety' },
      { id: 466, label: 'Sales' },
      { id: 467, label: 'Supply Chain' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/indm/all/image/static/indm-half.png',
  },
  pushdown: {
    ...defaults,
    description: '@TODO: get Description',
    imagePath: 'files/base/indm/all/image/static/indm-half.png',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: '@TODO: Configure(signupBannerLarge) title in newsletter.js',
    description: '@TODO: Configure(signupBannerLarge) description in newsletter.js.',
  },
  signupFooter: {
    ...baseConfig,
    name: '@TODO: Configure(signupFooter) title in newsletter.js',
    description: '@TODO: Configure(signupFooter) description in newsletter.js.',
  },
};
