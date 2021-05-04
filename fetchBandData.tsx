import Constants from 'expo-constants';

const Webflow = require('webflow-api');

// TODO check if webflow support automatic retries
export default async function fetchBandData() { 
  const webflow = new Webflow({ token: Constants.manifest.extra.apiKey });
  
  let offset = 0
  let allBands = []
  
  while (offset <= 200) {
    const webflowResponse = await webflow.items({ collectionId: Constants.manifest.extra.bandID }, { limit: 100, offset: offset })
    const webflowBands = webflowResponse.items
    
    allBands.push(webflowBands.map((band: any) => ({
      bandName: band.name,
      bandImageURL: band['album-image'].url,
      bandConcerts: band['band-concerts'],
      bandLogo: band['band-logo'].url
    })
    ))
    
    offset += 100 
  }
  console.log(allBands.flat().length) // logs 31, not 131
  return allBands.flat()
} 
