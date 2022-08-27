const action = () => {
  return {
    "code": 10000,
    "message": "",
    "data": {
      "pageNum": 1,
      "pageSize": 10,
      "totalPage": 10,
      "total": 100,
      "list": [
        {
          "hotelId": "94060826",
          "direct": false,
          "agreement": false,
          "groupCode": 1,
          "hotelName": "上海唐镇智选假日酒店",
          "coverImageHref": "https://pavo.elongstatic.com/i/Hotel350_350/nw_HiEmkjmcq4.jpg",
          "lowRate": 432,
          "distance": 0,
          "starRate": "4",
          "score": "4.8",
          "address": "高科东路515弄30号恒生万鹂广场4号楼",
          "latitude": "31.21862200000000000000",
          "longitude": "121.65977300000000000000",
          "positionName": "距离人民广场128米",
          "contactNumber": "021-12345678",
          "commentCount": 1234,
          "labels": [
            {
              "code": 1,
              "value": "直连"
            },
            {
              "code": 2,
              "value": "华住"
            }
          ]
        }
      ]
    }
  }
}
module.exports = action();