import Constants from 'expo-constants';

const Webflow = require('webflow-api');

// TODO check if webflow support automatic retries
export default async function fetchConcertData() { 
  const webflow = new Webflow({ token: Constants.manifest.extra.apiKey });
  
  let offset = 0
  let allConcerts = []

  while( offset <= 300) {
    const webflowResponse = await webflow.items({ collectionID: Constants.manifest.extra.concertID }, { limit: 100, offset: offset })
    const webflowConcerts = webflowResponse.items

    allConcerts.push(webflowConcerts.map((concert: any) => ({
      concertName: concert.name,
      concertImageURL: concert['album-image'].url,
      concertVideoURL: concert.video.url,
      concertType: concert.mood,
      concertID: concert._id
    })
    ))

    offset += 100

  }
  console.log(allConcerts.flat().length)
  return allConcerts.flat()
} 
