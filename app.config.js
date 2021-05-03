require('dotenv').config()

export default {
  name: 'Showme',
  version: '1.0.0',
  extra: {
    enableComments: process.env.SHOWME_COMMENTS === 'true',
    apiKey: process.env.REACT_APP_WEBFLOW_API,
    tagID: process.env.REACT_APP_WEBFLOW_TAG_ID,
    bandID: process.env.REACT_APP_WEBFLOW_BAND_ID,
    concertID: process.env.REACT_APP_WEBFLOW_CONCERT_ID,
  },
};