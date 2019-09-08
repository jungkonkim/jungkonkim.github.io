let config = {
  title: `KONPAGE`,
  author: 'Jungkon Kim',
  description: "Jungkon Kim's blog",
  siteUrl: 'https://jungkonkim.github.io',

  // # Header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'DEVELOPER',
  bioShow: true,

  // # Addtional
  googleAnalyticsTrackingId: '',
  disqusShortname: 'dev-kon-blog',

  // ## google AdSense
  // In addition, client-id in '/static/ads.txt' file needs to be modified
  googleAdsense: true,
  adsenseClient: 'ca-pub-5001380215831339',
  adsenseSlot: '5214956675',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
  config.googleAdsense = false;
}

module.exports = config;
