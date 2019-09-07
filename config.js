let config = {
  title: `HUNDRED`,
  author: 'Jungkon Kim',
  description: "KON PAGE",
  siteUrl: 'https://jungkonkim.github.io',

  // # Header config
  titleLogo: () => {
    return require('./src/images/profile.png'); // location of logo image
  },
  titleLogoShow: true, // logo image visible or not
  bio: 'DEVELOPER', // description
  bioShow: true,

  // # Addtional
  googleAnalyticsTrackingId: '',
  disqusShortname: '',

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
