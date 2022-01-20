
const standardObj = {
  Flight: {
    "applicatStandard": {
        "insuranceData": {
            "companyCreditUnifyNum": "9111010875872474XN",
            "employ": true,
            "expirationDate": null,
            "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
            "sellType": "SELL"
        },
        "name": "朱立凯",
        "phone": "13917296836",
        "ruleId": "",
        "standard": {
            "Discount": "经济舱6折及以下",
            "HasStandard": true,
            "LimitAmount": "",
            "StandardDes": "按照级别控制",
            "Statue": "1",
            "TimeStandard": "不限",
            "Title": "总监"
        }
    },
    "data": [
        {
            "insuranceData": {
                "companyCreditUnifyNum": "9111010875872474XN",
                "employ": true,
                "expirationDate": null,
                "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
                "sellType": "SELL"
            },
            "name": "朱立凯",
            "phone": "13917296836",
            "ruleId": "",
            "standard": {
                "Discount": "经济舱6折及以下",
                "HasStandard": true,
                "LimitAmount": "",
                "StandardDes": "按照级别控制",
                "Statue": "1",
                "TimeStandard": "不限",
                "Title": "总监"
            }
        }
    ],
    "errmsg": "success",
    "errno": "0",
    "extend": {
        "msgId": "trip.standardFlight",
        "standardtype": "flight",
        "ScheduleType": "Flight",
        "Type": "OW",
        "DepartureCity": "SHA",
        "DepartureCityGeoId": "L00509",
        "ArrivalCity": "CAN",
        "ArrivalCityGeoId": "L01262",
        "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
        "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
        "DepartureDate": "2021-11-19",
        "ArrivalDate": "",
        "Userlist": [
            {
                "isOuter": "false",
                "phone": "13917296836",
                "employeeNumber": "P1231"
            }
        ],
        "CountPerson": 1
    },
    "controlName": "超标",
    "controlScope": "org-text>刘凯集团>刘凯公司",
    "controlStatus": "FALSE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "f2036fa833c411eba83a13a7a34a2f7b,15469405c4cc11e9911f05ea727287d9,6c758fa655eb11e9940b25457df29ed4",
    "iHotelOverstep": "TRUE",
    "iHotelSharing": "FALSE",
    "iPlaneOverstep": "FALSE",
    "id": "11ebf98de3c6bed28d0791de0f6547cc",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "FALSE",
    "inlandPlaneOverstep": "TRUE",
    "inlandTrainOverstep": "TRUE",
    "updateDate": "",
    "groupName": "待订",
    "groupScope": "组织机构>刘凯集团, 组织机构>景泰新能源（上海）有限公司, 组织机构>集团",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "trainConfig": {},
    "msgId": "ivRouteChange",
    "exceedBook": [
        {
            "flightExceedBookVO": [],
            "hotelExceedBookVO": [],
            "trainExceedBookVO": [],
            "userVO": {
                "employeedNumber": "",
                "phone": "13917296836"
            }
        }
    ]
},
  Train: {
    "applicatStandard": {
        "HasStandard": true,
        "StandardDes": "按照级别控制",
        "Title": "总监",
        "insuranceData": {
            "companyCreditUnifyNum": "9111010875872474XN",
            "employ": true,
            "expirationDate": null,
            "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
            "sellType": "SELL"
        },
        "name": "朱立凯",
        "phone": "13917296836",
        "ruleId": "",
        "standard": [
            {
                "SeatType": "二等座;无座",
                "TrainType": "高铁/城际"
            },
            {
              "SeatType": "二等座",
              "TrainType": "动车"
          }
        ]
    },
    "data": [
        {
            "HasStandard": true,
            "StandardDes": "按照级别控制",
            "Title": "总监",
            "insuranceData": {
                "companyCreditUnifyNum": "9111010875872474XN",
                "employ": true,
                "expirationDate": null,
                "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
                "sellType": "SELL"
            },
            "name": "朱立凯",
            "phone": "13917296836",
            "ruleId": "",
            "standard": [
                {
                    "SeatType": "二等座;无座",
                    "TrainType": "高铁/城际"
                },
                {
                  "SeatType": "二等座",
                  "TrainType": "动车"
                }
            ]
        }
    ],
    "errmsg": "success",
    "errno": "0",
    "extend": {
        "msgId": "trip.standardTrain",
        "ScheduleType": "Train",
        "Type": "OW",
        "standardtype": "train",
        "DepartureCity": "上海",
        "DepartureCityGeoId": "L00509",
        "ArrivalCity": "常州",
        "ArrivalCityGeoId": "L00520",
        "DepartureStationCode": "",
        "ArrivalStationCode": "CZH",
        "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
        "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
        "DepartureDate": "2021-11-19",
        "ArrivalDate": "",
        "Userlist": [
            {
                "phone": "13917296836",
                "isOuter": "false",
                "employeeNumber": "P1231"
            }
        ],
        "CountPerson": 1
    },
    "controlName": "超标",
    "controlScope": "org-text>刘凯集团>刘凯公司",
    "controlStatus": "FALSE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "f2036fa833c411eba83a13a7a34a2f7b,15469405c4cc11e9911f05ea727287d9,6c758fa655eb11e9940b25457df29ed4",
    "iHotelOverstep": "TRUE",
    "iHotelSharing": "FALSE",
    "iPlaneOverstep": "FALSE",
    "id": "11ebf98de3c6bed28d0791de0f6547cc",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "FALSE",
    "inlandPlaneOverstep": "TRUE",
    "inlandTrainOverstep": "TRUE",
    "updateDate": "",
    "groupName": "待订",
    "groupScope": "组织机构>刘凯集团, 组织机构>景泰新能源（上海）有限公司, 组织机构>集团",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "trainConfig": {},
    "msgId": "ivRouteChange",
    "exceedBook": [
        {
            "flightExceedBookVO": [],
            "hotelExceedBookVO": [],
            "trainExceedBookVO": [],
            "userVO": {
                "employeedNumber": "",
                "phone": "13917296836"
            }
        }
    ]
},
  Hotel: {
    "applicatStandard": {
        "insuranceData": {
            "companyCreditUnifyNum": "9111010875872474XN",
            "employ": true,
            "expirationDate": null,
            "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
            "sellType": "SELL"
        },
        "name": "朱立凯",
        "phone": "13917296836",
        "ruleId": "",
        "standard": {
            "Currency": "CNY",
            "CurrencyName": "人民币",
            "CurrencyNameUS": "RMB",
            "HasStandard": true,
            "MoneyStandard": 200,
            "StandardDes": "按照级别控制",
            "Statue": "1"
        }
    },
    "data": [
        {
            "insuranceData": {
                "companyCreditUnifyNum": "9111010875872474XN",
                "employ": true,
                "expirationDate": null,
                "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
                "sellType": "SELL"
            },
            "name": "朱立凯",
            "phone": "13917296836",
            "ruleId": "",
            "standard": {
                "Currency": "CNY",
                "CurrencyName": "人民币",
                "CurrencyNameUS": "RMB",
                "HasStandard": true,
                "MoneyStandard": 200,
                "StandardDes": "按照级别控制",
                "Statue": "1"
            }
        }
    ],
    "errmsg": "success",
    "errno": "0",
    "hasShareRoom": false,
    "maxRoomCount": 1,
    "extend": {
        "msgId": "trip.standardHotel",
        "ScheduleType": "Hotel",
        "Type": "OW",
        "standardtype": "hotel",
        "DepartureCity": "武汉",
        "DepartureCityGeoId": "L01086",
        "ArrivalCity": "",
        "ArrivalCityGeoId": "",
        "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
        "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
        "DepartureDate": "2021-11-19",
        "ArrivalDate": "2021-11-20",
        "RoomCount": 1,
        "Userlist": [
            {
                "isOuter": "false",
                "phone": "13917296836",
                "employeeNumber": "P1231"
            }
        ]
    },
    "controlName": "超标",
    "controlScope": "org-text>刘凯集团>刘凯公司",
    "controlStatus": "FALSE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "f2036fa833c411eba83a13a7a34a2f7b,15469405c4cc11e9911f05ea727287d9,6c758fa655eb11e9940b25457df29ed4",
    "iHotelOverstep": "TRUE",
    "iHotelSharing": "FALSE",
    "iPlaneOverstep": "FALSE",
    "id": "11ebf98de3c6bed28d0791de0f6547cc",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "FALSE",
    "inlandPlaneOverstep": "TRUE",
    "inlandTrainOverstep": "TRUE",
    "updateDate": "",
    "groupName": "待订",
    "groupScope": "组织机构>刘凯集团, 组织机构>景泰新能源（上海）有限公司, 组织机构>集团",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "trainConfig": {},
    "msgId": "ivRouteChange",
    "exceedBook": [
        {
            "flightExceedBookVO": [],
            "hotelExceedBookVO": [],
            "trainExceedBookVO": [],
            "userVO": {
                "employeedNumber": "",
                "phone": "13917296836"
            }
        }
    ]
},
  InternationalHotel: {
    "errmsg": "当前用户未配置相关差旅标准",
    "errno": "1",
    "extend": {
        "msgId": "trip.standardInternationalHotel",
        "ScheduleType": "InternationalHotel",
        "Type": "OW",
        "standardtype": "internationalhotel",
        "DepartureCity": "澳门",
        "DepartureCityGeoId": "F09999",
        "ArrivalCity": "",
        "ArrivalCityGeoId": "",
        "CooperatorId": "67074509-77bb-11e9-a754-0242ac110002",
        "CompanyId": "b4bac71e-a4d2-c835-02f0-08d6d9509d1a",
        "DepartureDate": "2021-11-10",
        "ArrivalDate": "2021-11-11",
        "RoomCount": 1,
        "Userlist": [
            {
                "isOuter": "false",
                "phone": "13659845984",
                "employeeNumber": "yn23232"
            }
        ]
    },
    "controlName": "拼房",
    "controlScope": "组织机构>元年科技>武汉测试部, 组织机构>元年>ECS测试部, 组织机构>元年>ECS产品部, 组织机构>元年>ECS研发部, 组织机构>研发中心>测试部, 组织机构>zr测试组织机构-集团>zr测试组织机构-公司>zr测试组织机构-部门2",
    "controlStatus": "TRUE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "e9303550bf2011e9bc547d6f20fb98e5,080a68ebc22111e99a534ff0f016339f,fe1ad295bf2011e9bc545fa782ceb7d4,abc5335ac3e711e99bc083dd54af898c",
    "iHotelOverstep": "FALSE",
    "iHotelSharing": "FALSE",
    "iPlaneOverstep": "FALSE",
    "id": "c68386145dea11eaad1a1fc636bba5f8",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "TRUE",
    "inlandPlaneOverstep": "TRUE",
    "inlandTrainOverstep": "TRUE",
    "updateDate": "",
    "groupName": "元年+元年科技+云快报",
    "groupScope": "组织机构>元年科技, 组织机构>元年, 组织机构>研发中心, 组织机构>云快报",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "trainConfig": {},
    "msgId": "ivRouteChange",
    "exceedBook": [
        {
            "flightExceedBookVO": [
                {
                    "exceedControlMode": "EXCEED_NOTBOOK_NOTVISIBLE",
                    "exceedEffectNode": "BILL_CHANGE"
                }
            ],
            "hotelExceedBookVO": [
                {
                    "exceedControlMode": "EXCEED_NOTBOOK_NOTVISIBLE",
                    "exceedEffectNode": "BILL_AFTER"
                }
            ],
            "trainExceedBookVO": [
                {
                    "exceedControlMode": "EXCEED_BOOK",
                    "exceedEffectNode": "BILL_CHANGE"
                }
            ],
            "userVO": {
                "employeedNumber": "",
                "phone": "13659845984"
            }
        }
    ]
}
}
const trainConfig = {
  "method": "trainConfig",
  "trainConfig": {
    "data": "true",
    "message": "",
    "success": true
  },
  "msgId": "trainConfig"
};
/**
 * 语音交互数据
 */
const jumpTrainData = {
  "destinationCity": "武汉市",
  "trainExtendParam": {
    "trainCode": ""
  },
  "hotelExtendParam": {
    "hotelCity": "北京市"
  },
  "travelType": "hotel",
  "originCity": "上海",
  "travelBeginDate": "2021-12-3 10:00:00",
  "travelEndDate": "2021-12-4 10:00:00",
  "ivInstruction": "jumpHotel"
}
const flightListFilterData = {
  "travelEndDate": "2021-11-16 17:00:00", // "2021-08-09 11:00:00",
  "travelType": "flight",
  "ivInstruction": "flightListFilter",
  "travelBeginDate": "2021-11-16 12:00:00", // "2021-08-09 08:00:00",
  "airExtendParam": {
    "airCabinLevel": "商务舱",
    "flightCode": null,
    "airCompany": "", // "南方航空",
    "standardFlight": "所有航班" //"所有航班",  // 合标航班  所有航班
    // "directFlight": "" // "仅看直飞" //仅看直飞  隐藏共享航班
  }
}
const flightListBackFilterData = {
  "travelEndDate": "2021-11-09 11:00:00",
  "travelType": "flight",
  "ivInstruction": "flightListBackFilter",
  "travelBeginDate": "2021-11-09 08:00:00",
  "airExtendParam": {
    "airCabinLevel": "经济舱",
    "flightCode": null,
    "airCompany": "南方航空",
    "standardFlight": "所有航班",  // 合标航班  所有航班
    "directFlight": "仅看直飞" //仅看直飞  隐藏共享航班
  }
}
const trainListFilterData = {
  "travelEndDate": "2021-11-12 24:00:00",
  "travelType": "train",
  "ivInstruction": "trainListFilter",
  "travelBeginDate": "2021-11-12 18:00:00",
  "airExtendParam": {
    "trainType": "动车",  // 高铁 动车 普通
    "trainCode": null,
    "standardTrain": "所有车次",  // 合规车次  所有车次
  }
}
const trainListBackFilterData = {
  "travelEndDate": "2021-11-13 12:00:00",
  "travelType": "train",
  "ivInstruction": "trainListBackFilter",
  "travelBeginDate": "2021-11-13 08:00:00",
  "airExtendParam": {
    "trainType": "动车",  // 高铁 动车 普通
    "trainCode": null,
    "standardTrain": "合规车次",  // 合规车次  所有车次
  }
}
const hotelListFilterData = {
  "travelEndDate": null,
  "travelType": "hotel",
  "ivInstruction": "hotelListFilter",
  "travelBeginDate": null,
  "airExtendParam": {
    "lowestPrice": "100",
    "ceilingPrice": "300",
    "hotelLevel": "三星级",  //经济连锁  三星级  四星级 五星级 不限
    "standardHotel": "全部酒店",  // 合标酒店 全部酒店
  }
}
const voiceData = {
  extend: {
    msgId: "robotData",
  },
  data: jumpTrainData
};
const iframeUrl = "../postChild/pchild.html";
// const iframeUrl = "http://192.168.95.143:8081/#/redirect?authenticate=RVpUK1RvL3RkY2FEMXkxTXVIKzg2dGtFZFBaSTA5N1ltVStzd2ZaTjIrV3d1MjJneS8rRk8yd3hlNWRtZi9SRFg1WDBFVzM5UnJMRnZ1MzNrV3VSTHc9PQ==&travelRequisitionNo=CLSQFK012104080006&itemDescription=&tripInfoId=&itineraryType=all&leaveTripDate=unlimited&returnTripDate=unlimited&departureCity=unlimited&arrivalsCity=unlimited&bookingType=&isSubmitItineraryOnlyWithFlight=yes&callbackURL=&companyId=b4bac71e-a4d2-c835-02f0-08d6d9509d1a&cooperatorId=97727ed9-3c6f-11e8-91e7-02004c4f4f50&returnURL=&businessType=&action=index&routerName=&lang=zh-CN&otherTravelersEnable=true&method=postMessage";
const eleYkb = document.querySelector("#ykb");
eleYkb.src = iframeUrl
const ykbWindow = eleYkb.contentWindow;
class Pmessage {
  constructor(w = window) {
    this.flushcb = {};
  }
  // option = { frameName, action, data}
  addEvent() {
    window.addEventListener("message", (e) => {
      let orginalData = {};
      try {
        orginalData = JSON.parse(e.data);
      } catch (err) {
        console.log(err);
      }
      const { frameName = "", extend = {}, msgId = "" } = orginalData;
      const action = extend.msgId || msgId;
      const cb = action && this.flushcb[frameName + action];
      cb && typeof cb === "function" && cb(e);
      if (!cb) {
        // 如果没有注册该action，则console.log
        console.log(`msgId为${action}没有回调，数据为${e.data}`);
      }
    });
  }
  send(option, targetFrame = window.parent) {
    // 默认是 给父 window发消息
    targetFrame.postMessage(JSON.stringify(option), "*");
  }
  // 注册某一行为的回调
  registAction(option, callback) {
    // 默认监听 父window发处的消息
    const { frameName = "", action } = option;
    this.flushcb[frameName + action] = callback;
  }
  // 清空某一行为的回调，有值清除指定的，
  clearAction(option) {
    if (!option) {
      this.flushcb = {};
    } else {
      const { frameName = "", action } = option;
      this.flushcb[frameName + action] = null;
      delete this.flushcb[frameName + action];
    }
  }
  destroy() {
    window.removeEventListener("message", this.messageCb, false);
  }
}
const pm = new Pmessage();
pm.addEvent();
pm.registAction({ frameName: "", action: "trip.standard" }, function ts(msg) {
  // console.log("parent receive,trip.standard data:", msg);
  let orginalData = {};
  try {
    orginalData = JSON.parse(msg.data);
  } catch (err) {
    console.log(err);
  }
  const { frameName = "", extend = {} } = orginalData;
  const { ScheduleType = "" } = extend;
  setTimeout(() => {
    pm.send(standardObj[ScheduleType], ykbWindow)
  }, 300);
});
pm.registAction({ frameName: "", action: "trip.standardFlight" }, function ts(msg) {
  // console.log("parent receive,trip.standard data:", msg);
  let orginalData = {};
  try {
    orginalData = JSON.parse(msg.data);
  } catch (err) {
    console.log(err);
  }
  const { frameName = "", extend = {} } = orginalData;
  const { ScheduleType = "" } = extend;
  setTimeout(() => {
    pm.send(standardObj[ScheduleType], ykbWindow)
  }, 300);
});
pm.registAction({ frameName: "", action: "trip.standardTrain" }, function ts(msg) {
  console.log("parent receive,trip.standardTrain data:", msg);
  let orginalData = {};
  try {
    orginalData = JSON.parse(msg.data);
  } catch (err) {
    console.log(err);
  }
  const { frameName = "", extend = {} } = orginalData;
  const { ScheduleType = "" } = extend;
  setTimeout(() => {
    pm.send(standardObj[ScheduleType], ykbWindow)
  }, 300);
});
pm.registAction({ frameName: "", action: "trip.standardHotel" }, function ts(msg) {
  console.log("parent receive,trip.standardHotel data:", msg);
  let orginalData = {};
  try {
    orginalData = JSON.parse(msg.data);
  } catch (err) {
    console.log(err);
  }
  const { frameName = "", extend = {} } = orginalData;
  const { ScheduleType = "" } = extend;
  setTimeout(() => {
    pm.send(standardObj[ScheduleType], ykbWindow)
  }, 300);
});
pm.registAction({ frameName: "", action: "trip.standardInternationalHotel" }, function ts(msg) {
  console.log("parent receive,trip.standardInternationalHotel data:", msg);
  let orginalData = {};
  try {
    orginalData = JSON.parse(msg.data);
  } catch (err) {
    console.log(err);
  }
  const { frameName = "", extend = {} } = orginalData;
  const { ScheduleType = "" } = extend;
  setTimeout(() => {
    pm.send(standardObj[ScheduleType], ykbWindow)
  }, 300);
});
pm.registAction({ frameName: "", action: "trainConfig" }, function ts(data) {
  // console.log("parent receive,trainConfig data:", data);
  pm.send(trainConfig, ykbWindow)
});
pm.registAction({ frameName: "", action: "ykbLoaded" }, function ts(data) {
  console.log("parent receive,ykbLoaded:", data);
  pm.send(voiceData, ykbWindow)
});
eleYkb.onload = () => {
  console.log("ykbwindow.onload");
  pm.send(voiceData, ykbWindow)
};
pm.registAction({ frameName: "", action: "ivRouteChange" }, function ts(data) {
  // console.log("parent receive,ivRouteChange:", data);
  const originalData = data.data;
  const { msgId, data: routeData } = JSON.parse(originalData);
  // console.log("msgId:", msgId, "routeData:", routeData);
});

const eleBtn = document.querySelector(".btn-send-msg")
eleBtn.onclick = () => {
  // flightListBackFilterData.travelEndDate = "2021-08-06 17:00:00",
  // hotelListFilterData.airExtendParam.hotelLevel = "经济连锁"
  // flightListFilterData.airExtendParam.airCabinLevel = "经济舱"
  trainListFilterData.airExtendParam.trainType = "高铁"
  pm.send(voiceData, ykbWindow)
}


