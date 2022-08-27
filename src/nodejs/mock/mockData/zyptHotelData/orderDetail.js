const action = () => {
  return {
    "tenantId":"100000001",
    "orderNo":"58202204010129217718",
    "totalAmount":299,
    "saleLowRate":120,
    "status":"36",
    "showStatus":"取消成功",
    "arriveDate":"2022-04-07",
    "departureDate":"2022-04-09",
    "cancelable":true,
    "paymentType":"prepay",
    "settlementType":1,
    "earliestArrivalTime":"2022-04-07 18:00:00",
    "latestArrivalTime":"2022-04-07 20:00:00",
    "lasterCancelTime":"2022-04-07 14:00:00",
    "retain_time":"2022-04-09 12:00:00",
    "creteTime":"2022-04-01 01:29:23",
    "confirmTime":"2022-04-01 01:32:48",
    "roomCount":1,
    "nightCount":2,
    "contacts":"刘录",
    "contactNumber":"17666114377",
    "geoName":"北京",
    "bedTypeName":"双人床",
    "opinion":"超标不批",
    "isExceed":false,
    "exceedAmount":20,
    "control":[
        {
            "standardInfo":{
                "isExceed":true,
                "exceedAmount":100,
                "standardRule":"超标判定规则",
                "standardDetails":[
                    {
                        "name":"刘录",
                        "userId":"b7ea9ce4-577d-c92d-c474-08d34327f629",
                        "date":"2022-04-07",
                        "price":120,
                        "isExceed":false,
                        "standard":100,
                        "remark":"当前间夜超标10元"
                    }
                ]
            }
        },
        {
            "violationInfo":{
                "isViolation":true,
                "violationCode":1,
                "violationDesc":"不含早餐"
            }
        }
    ],
    "prepayRule":{
        "prepayRuleId":"xiecheng_271184714_835821400",
        "description":"2022-04-07 14:00:00前可免费变更取消，之后无法变更取消，如未入住则扣除全额房费作为罚金。",
        "dateType":"CheckInDay",
        "startDate":"2022-04-07",
        "endDate":"2022-04-09",
        "weekSet":"0,1,2,3,4,5,6",
        "changeRule":"PrepayNeedOneTime",
        "hour":"",
        "hour2":"",
        "dateNum":"2022-04-07",
        "time":"14:00:00",
        "deductFeesBefore":0,
        "deductNumBefore":0,
        "cashScaleFirstBefore":"",
        "deductFeesAfter":0,
        "deductNumAfter":0,
        "cashScaleFirstAfter":"",
        "prepayJson":null
    },
    "nightlyRates":[
        {
            "price":206,
            "otherAmout":0,
            "date":"2022-04-13",
            "mealType":0,
            "mealNum":1
        }
    ],
    "guests":[
        {
            "name":"刘录",
            "phone":"17666114377",
            "type":1,
            "idNo":"110101199003074899",
            "employeeNo":"YN20160092",
            "userId":"b7ea9ce4-577d-c92d-c474-08d34327f629",
            "roomRelevanceNo":1,
            "isResident":0
        }
    ],
    "hotel":{
        "hotelId":"454138",
        "hotelName":"北京空港世纪商务精选酒店",
        "address":"首都国际机场首都机场路06号",
        "geoName":"北京",
        "contactNumber":"010-64590991",
        "ratePlanId":"835821400",
        "ratePlanName":"经济大床房(官方直营)",
        "roomTypeId":"271184714",
        "roomTypeName":"经济大床房",
        "longitude":"116.59943200000000000000",
        "latitude":"40.07209200000000000000"
    }
}


}
module.exports = action();