const action = () => {
  return {
    "Code": "SUCCESS",
    "Message": "查询机票使用列表成功",
    "Result": {
      "TicketActualUseList": [
        {
          "supplierName": "中航服（国际）",
          "formId": "T211102677",
          "passengerName": "王玮",
          "orderType": "order",
          "ticketPrice": "1233.00",
          "orderId": "1638446215660847368",
          "companyName": "汉东长沙",
          "accountCompanyId": "1000000001369651",
          "mobile": "15901074255",
          "lastOrderId": "",
          "PassengerCurOrderStatus": "退票中",
          "lastTicketNo": "",
          "segments": [
            {
              "distance": "11",
              "TicketUseStatusCode": "2",
              "updateTime": "2022-06-10 09:04:55.0",
              "TicketUseStatusDesc": "未使用",
              "startCityName": "北京",
              "endCityName": "香港",
              "startAirportName": "首都国际机场",
              "flightNum": "CA8888",
              "orderFlightSegmentId": "1638446215664626506",
              "seatPoint": "经济舱",
              "endAirportName": "香港国际机场",
              "startTime": "2021-12-02 19:56:00",
              "endTime": "2021-12-02 19:56:00",
              "orderPassengerId": "1638446215662773051"
            }
          ],
          "canOperate": false,
          "companyId": "54f97880-87bd-c52a-a6a0-08d5914bcd2c",
          "orderPriceId": "1638446215663027235",
          "ticketNo": "65ytr76765",
          "orderPassengerId": "1638446215662773051",
          "accountCompanyName": "",
          "outTicketDate": "2021-12-02"
        },
        {
          "supplierName": "中航服(国际)",
          "formId": "T211200125",
          "passengerName": "王玮",
          "orderType": "change",
          "ticketPrice": "160.00",
          "orderId": "1638440068468158456",
          "companyName": "汉东长沙",
          "accountCompanyId": "1000000001369651",
          "mobile": "15901074255",
          "lastOrderId": "20220624",
          "PassengerCurOrderStatus": "改签成功",
          "lastTicketNo": "20220625",
          "segments": [
            {
              "distance": "22",
              "TicketUseStatusCode": "2",
              "updateTime": "2022-06-10 09:04:55.0",
              "TicketUseStatusDesc": "未使用",
              "startCityName": "北京",
              "endCityName": "香港",
              "startAirportName": "首都国际机场",
              "flightNum": "CA2233",
              "orderFlightSegmentId": "1638440068501620170",
              "seatPoint": "经济舱",
              "endAirportName": "香港国际机场",
              "startTime": "2021-12-06 00:00:00",
              "endTime": "2021-12-06 06:00:00",
              "orderPassengerId": "1638440068581276081"
            }
          ],
          "canOperate": true,
          "companyId": "54f97880-87bd-c52a-a6a0-08d5914bcd2c",
          "orderPriceId": "1638438716475581060",
          "ticketNo": "43fr3456465",
          "orderPassengerId": "1638440068581276081",
          "accountCompanyName": "",
          "outTicketDate": "2021-12-02"
        }
      ],
      "TicketActualUseCount": 2
    }
  }
}
module.exports = action();