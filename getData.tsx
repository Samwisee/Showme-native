const Webflow = require('webflow-api');
const API_TOKEN = 'process.env.REACT_APP_WEBFLOW_API'
const webflow = new Webflow({ token: API_TOKEN });

async function getBands() { 
  try { 
    const webflowResponse = await webflow.items({ collectionId: '603f35b07235051cd1ca3711' }, { limit: 100})
    const webflowBands = webflowResponse.items
    const bandArray =[]
    console.log(webflowBands)
    const bands = webflowBands.forEach((band: any) => {
      bandArray.push({
        bandName: band.name,
        bandImageURL: band['album-image'].url,
        bandConcerts: band['band-concerts'],
        bandLogo: band
      }) 
    })
    console.log(bandArray)
  } catch(e) {
    console.error(e)
  }
} 
 // Can't be above 100, so this will have to be run multiple times

getBands()

