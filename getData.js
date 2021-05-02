var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Webflow = require('webflow-api');
var API_TOKEN = 'process.env.REACT_APP_WEBFLOW_API';
var webflow = new Webflow({ token: API_TOKEN });
function getBands() {
    return __awaiter(this, void 0, void 0, function () {
        var webflowResponse, webflowBands, bandArray_1, bands, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, webflow.items({ collectionId: '603f35b07235051cd1ca3711' }, { limit: 100 })];
                case 1:
                    webflowResponse = _a.sent();
                    webflowBands = webflowResponse.items;
                    bandArray_1 = [];
                    console.log(webflowBands);
                    bands = webflowBands.forEach(function (band) {
                        bandArray_1.push({
                            bandName: band.name,
                            bandImageURL: band['album-image'].url,
                            bandConcerts: band['band-concerts'],
                            bandLogo: band
                        });
                    });
                    console.log(bandArray_1);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Can't be above 100, so this will have to be run multiple times
// getBands();

const concertArray = [  {
    concertName: 'Coldplay | iTunes Festival 2014',
    concertImageURL: 'https://uploads-ssl.webflow.com/6030ae4e74e18c1d7a324e49/60332eaab8ef5cd530dbc349_6030f7a056323c408d684155_Screen%20Shot%202021-02-20%20at%2010.50.27%20PM.jpg',
    concertVideoURL: 'https://www.dailymotion.com/embed/video/x3dn195',
    concertType: 'Indoor Arena',
    concertID: '603f35b0723505ffb1ca373e'
  },
  {
    concertName: 'Chainsmokers & Coldplay | Something Just Like This 2017',
    concertImageURL: 'https://uploads-ssl.webflow.com/6030ae4e74e18c1d7a324e49/603d91ce42be86cc34939050_Screen%20Shot%202021-03-02%20at%2012.15.46%20PM.jpg',
    concertVideoURL: 'https://www.youtube.com/watch?v=4u6bWs-ZG0o&hd1080',
    concertType: 'Indoor Arena',
    concertID: '603f35b07235057fa7ca3835'
  },
]

const bandConcertIDs = [
    '603f35b0723505720bca3837',
    '603f35b0723505ffb1ca373e',
    '603f35b0723505d41fca3836',
    '603f35b07235057fa7ca3835',
    '603f35b072350566b3ca3739',
    '603f35b0723505770fca385d'
  ]

const filtered = concertArray.filter(concert => bandConcertIDs.includes(concert.concertID))

// var arr1 = [1,2,3,4],
//     arr2 = [2,4],
//     res = arr1.filter(item => !arr2.includes(item));
// console.log(res);


console.log(NaN === NaN)