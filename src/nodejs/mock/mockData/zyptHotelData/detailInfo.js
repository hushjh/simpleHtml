const action = () => {
    return {
        "code": 10000,
        "message": "查询成功",
        "data": {
            "lowRate": 206,
            "saleLowRate": 213,
            "rooms": [
                {
                    "name": "大床房",
                    "lowRate": 206,
                    "saleLowRate": 213,
                    "status": false,
                    "floor": "3",
                    "area": "17",
                    "capcity": "2",
                    "description": "17㎡左右、2人入住",
                    "coverImageHref": "http://123.com/123.jpg",
                    "labels": [
                        {
                            "code": 1,
                            "value": "直连"
                        },
                        {
                            "code": 2,
                            "value": "华住"
                        },
                        {
                            "code": 3,
                            "value": "http://ykb.cn-bj.ufileos.com/supplier/1628076980350843672huazhu.svg"
                        }
                    ],
                    "shield": {
                        "code": 1,
                        "value": "根据公司规定当前房型不可预订"
                    },
                    "ratePlans": [
                        {
                            "hotelId": "2000014",
                            "hotelCode": "2000014",
                            "roomTypeId": "DR1",
                            "ratePlanId": "302750002-Base-OCK-STD",
                            "status": false,
                            "mealType": 0,
                            "mealNum": 1,
                            "supportIntegral": false,
                            "cancelType": 1,
                            "cancelDes": "限时取消",
                            "paymentType": "Prepay",
                            "settlementType": 1,
                            "ratePlanName": "连住7天折上9折",
                            "customerType": "All",
                            "instantConfirmation": true,
                            "needIdNo": false,
                            "totalRate": 206,
                            "averageRate": 206,
                            "currencyCode": "CNY",
                            "bookingRuleIds": "",
                            "prepayRuleIds": "huazhu_DR1_302750002-Base-OCK-STD",
                            "guranteeRuleId": "",
                            "minAmount": 1,
                            "maxAmount": 10,
                            "minDays": 7,
                            "maxDays": 365,
                            "bedTypeDesc": "大床房",
                            "bedTypeCode": "",
                            "windowDesc": "部分有窗",
                            "direct": true,
                            "agreement": false,
                            "condition": 128,
                            "supplier": {
                                "name": "华住",
                                "logo": "http://123.com"
                            },
                            "exceedInfo": {
                                "exceeding": true,
                                "guest": "胡宇翔",
                                "remarks": "只能预订每晚300以内的酒店（只有一个入住人的时候该对象才会存在，多人不管）"
                            },
                            "labels": [
                                {
                                    "code": 1,
                                    "value": "直连"
                                },
                                {
                                    "code": 2,
                                    "value": "专票"
                                }
                            ],
                            "invoice": {
                                "invoiceMode": "Supplier",
                                "invoiceType": "SpecialTicket",
                                "invoiceDetails": "发票由贵司统一申请开具"
                            },
                            "nightlyRates": [
                                {
                                    "price": 206,
                                    "otherAmout": 1,
                                    "status": false,
                                    "date": "2022-04-13",
                                    "mealType": 0,
                                    "mealNum": 1,
                                    "identification": "yyy"
                                }
                            ],
                            "identification": "xxx"
                        }
                    ],
                    "images": [
                        "http://dimg04.c-ctrip.com/images//200r1e000001esvt1B516_R_550_412.jpg",
                        "http://dimg04.c-ctrip.com/images//200v1e000001f5ijrC51F_R_550_412.jpg",
                        "http://dimg04.c-ctrip.com/images//200o1d000001eqf0p96F7_R_550_412.jpg",
                        "http://dimg04.c-ctrip.com/images//200s1e000001f18ilE5E7_R_550_412.jpg",
                        "http://dimg04.c-ctrip.com/images//200i1e000001et52gD2E5_R_550_412.jpg",
                        "http://dimg04.c-ctrip.com/images//200c1d000001eu7yb1A56_R_550_412.jpg",
                        "https://pavo.elongstatic.com/i/Hotel350_350/OAlVsXJtJu.jpg"
                    ]
                }
            ],
            "bookingRules": null,
            "guaranteeRules": null,
            "prepayRules": [
                {
                    "prepayRuleId": "huazhu_DR1_302750002-Base-OCK-STD",
                    "description": "2022-04-13 18:00:00前可免费变更取消，之后无法变更取消，如未入住则扣除全额房费作为罚金。",
                    "dateType": "CheckInDay",
                    "startDate": "2022-04-13",
                    "endDate": "2022-04-14",
                    "weekSet": "0,1,2,3,4,5,6",
                    "changeRule": "PrepayNeedOneTime",
                    "hour": null,
                    "hour2": null,
                    "dateNum": "2022-04-13",
                    "time": "18:00:00",
                    "deductFeesBefore": 0,
                    "deductNumBefore": 0,
                    "cashScaleFirstBefore": null,
                    "deductFeesAfter": 0,
                    "deductNumAfter": 0,
                    "cashScaleFirstAfter": null,
                    "prepayJson": null
                }
            ],
            "labels": [
                {
                    "code": 1,
                    "value": "直连",
                    "condition": 128
                },
                {
                    "code": 2,
                    "value": "协议",
                    "condition": 128
                },
                {
                    "code": 3,
                    "value": "统付",
                    "condition": 128
                },
                {
                    "code": 4,
                    "value": "含早",
                    "condition": 128
                }
            ],
            "shield": {
                "code": 1,
                "value": "根据公司规定当前房型不可预订"
            }
        }
    }
}

module.exports = action();