import Constants from 'expo-constants';

const Webflow = require('webflow-api');

// TODO check if webflow support automatic retries
export default async function getBands() { 
  const webflow = new Webflow({ token: Constants.manifest.extra.apiKey });
  const webflowResponse = await webflow.items({ collectionId: Constants.manifest.extra.concertID }, { limit: 100 })
  const webflowBands = webflowResponse.items
  return webflowBands.map((concert: any) => ({
    concertName: concert.name,
    concertImageURL: concert['album-image'].url,
    concertVideoURL: concert.video.url,
    concertType: concert.mood,
    concertID: concert._id
    })
  )
} 
// Can't be above 100, so this will have to be run multiple times