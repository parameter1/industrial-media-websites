module.exports = {
  enabled: process.env.ENABLE_CONTENT_METER === 'true',
  viewLimit: Number(process.env.CONTENT_METER_VIEW_LIMIT) || 2,
  excludeLabels: [
    'Sponsored',
  ],
  excludeContentTypes: [
    'company',
    'contact',
    'document',
    'event',
    'news',
    'podcast',
    'press_release',
    'product',
    'video',
    'webinar',
  ],
  // excludePrimarySectionIds: [
  //   75347,
  // ],
  // excludePrimarySectionAlias: [
  //   'home',
  // ],
  // 30 days to milliseconds
  timeframe: 30 * 24 * 60 * 60 * 1000,
  displayOverlay: true,
  promoCode: 'registration_meter',
};
