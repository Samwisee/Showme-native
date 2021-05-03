import Constants from 'expo-constants';

const Webflow = require('webflow-api');

// TODO check if webflow support automatic retries
export default async function getBands() { 
  const webflow = new Webflow({ token: Constants.manifest.extra.apiKey });
  const webflowResponse = await webflow.items({ collectionId: Constants.manifest.extra.bandID }, { limit: 100 })
  const webflowBands = webflowResponse.items
  return webflowBands.map((band: any) => ({
      bandName: band.name,
      bandImageURL: band['album-image'].url,
      bandConcerts: band['band-concerts'],
      bandLogo: band['band-logo'].url
    })
  )
} 
// Can't be above 100, so this will have to be run multiple times