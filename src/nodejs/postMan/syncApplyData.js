const https = require("https");
const postData = JSON.stringify({
  "applyName":"测试-WNQtw_NWD%cfSq1Oxn_001977",
  "applyNo":"WNQtw_NWD%cfSq1Oxn_0878",
  "applyStatus":"1",
  "applyType":0,
  "compId":"fe10636e-387e-4ff9-bc98-38b0c5500df9",
  "compName":"集成环境资源平台测试专用企业",
  "createUserKey":"2fbb730e-5e2e-43e8-9db0-37a5ea056f86",
  "createUserName":"资源平台",
  "createUserNo":"zypt",
  "expand":"",
  "flightList":[
     {
          "airline":"MU",
          "currency":"CNY",
          "currencyName":"人民币",
          "fromCityCode":"WUH",
          "fromCityName":"武汉",
          "fromCountryCode":"CN",
          "fromCountryName":"中国",
          "fromGeoId":"L01086",
          "passengers":[
              {
                  "userKey":"2fbb730e-5e2e-43e8-9db0-37a5ea056f86"
              },
              {
                  "userKey":"9dbc537e-d4e2-11ec-8ae2-0242ac110002"
              },
              {
                  "userKey":"e5c5a955-d4e3-11ec-8ae2-0242ac110002"
              },
              {
                  "userKey":"e5c937b4-d4e3-11ec-8ae2-0242ac110002"
              }
          ],
          "returnEndDate":"2022-07-09",
          "returnStartDate":"2022-07-09",
          "setoutEndDate":"2022-06-30",
          "setoutStartDate":"2022-06-30",
          "toCityCode":"CKG",
          "toCityName":"武汉",
          "toCountryCode":"CN",
          "toCountryName":"中国",
          "toGeoId":"L01086",
          "travelNo":"FN16293599022236215",
          "travelType":0,
          "type":0
      }
  ],
  "hotelList":[
{
          "roomCount":2,
          "nightCount":2,
          "passengers":[
              {
                  "userKey":"2fbb730e-5e2e-43e8-9db0-37a5ea056f86"
              },
              {
                  "userKey":"e5c5a955-d4e3-11ec-8ae2-0242ac110002"
              }
          ],
          "checkoutStartDate":"2022-08-05",
          "checkinCityCode":"WUH",
          "type":0,
          "checkinEndDate":"2022-08-03",
          "checkinCityName":"武汉",
          "currencyName":"人民币",
          "checkinStartDate":"2022-08-03",
          "travelNo":"out_no_hotel_00004",
          "checkoutEndDate":"2022-08-05",
          "currency":"CNY",
          "checkinGeoId":"L01086"
      }
  ],
  "outStandardConf":0,
  "payCompId":"",
  "reason":"",
  "scheduleUnplannedList":[
      {
          "cityList":[
          ],
          "passengers":[
              {
                  "userKey":"2fbb730e-5e2e-43e8-9db0-37a5ea056f86"
              },
              {
                  "userKey":"9dbc537e-d4e2-11ec-8ae2-0242ac110002"
              },
              {
                  "userKey":"e5c5a955-d4e3-11ec-8ae2-0242ac110002"
              },
              {
                  "userKey":"e5c937b4-d4e3-11ec-8ae2-0242ac110002"
              }
          ],
          "travelEndDate":"",
          "travelStartDate":"",
          "roomCount":2,
          "nightCount":2
      }
  ],
  "trainList":[
    {
          "setoutEndDate":"2022-07-01",
          "toGeoId":"L01086",
          "fromStationName":"武昌",
          "returnStartDate":"2022-07-08",
          "type":0,
          "toCountryName":"中国",
          "travelType":0,
          "fromCityName":"武汉",
          "toCityCode":"SHA",
          "returnEndDate":"2022-07-08",
          "setoutStartDate":"2022-07-01",
          "toCityName":"武汉",
          "passengers":[
              {
                  "userKey":"2fbb730e-5e2e-43e8-9db0-37a5ea056f86"
              },
              {
                  "userKey":"e5c5a955-d4e3-11ec-8ae2-0242ac110002"
              }
          ],
          "toCountryCode":"CN",
          "fromStation":"WCN",
          "toStation":"HKN",
          "toStationName":"汉口",
          "fromCityCode":"Wuhan",
          "fromGeoId":"L01086",
          "travelNo":"test"
      }
  ],
  "validityStart":"2022-07-01",
  "validityEnd":"2022-08-24",
  "visible":1
});
const options = {
  hostname: 'utesttravelapi.yuanian.com',
  port: 443,
  path: '/travel-rst/v1/schedule/syncApplyData',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    appId: "fe10636e-387e-4ff9-bc98-38b0c5500df9"
  }
};
const request = https.request(options, (res) => {
  let body = [];
  res.on("data", (chunk) => {
    body.push(chunk);
  })
  res.on("end", () => {
    body = Buffer.concat(body);
    console.log(body.toString());
  })
});
request.write(postData);
request.end();