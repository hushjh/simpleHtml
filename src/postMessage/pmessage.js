
const standardObj = {
  Flight: {
    "applicatStandard": {
      "insuranceData": {
        "companyCreditUnifyNum": "9111010875872474XN",
        "employ": true,
        "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
        "sellType": "SELL"
      },
      "name": "朱立凯",
      "phone": "13917296836",
      "ruleId": "",
      "standard": {
        "Discount": "经济舱全价及以下",
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
          "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
          "sellType": "SELL"
        },
        "name": "朱立凯",
        "phone": "13917296836",
        "ruleId": "",
        "standard": {
          "Discount": "经济舱全价及以下",
          "HasStandard": true,
          "LimitAmount": "",
          "StandardDes": "按照级别控制",
          "Statue": "1",
          "TimeStandard": "不限",
          "Title": "总监"
        },
        "isOuter": "false"
      }
    ],
    "errmsg": "success",
    "errno": "0",
    "extend": {
      "msgId": "trip.standard",
      "standardtype": "flight",
      "ScheduleType": "Flight",
      "Type": "OW",
      "DepartureCity": "BJS",
      "DepartureCityGeoId": "L00001",
      "ArrivalCity": "WUH",
      "ArrivalCityGeoId": "L01086",
      "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
      "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
      "DepartureDate": "2021-07-21",
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
    "createDate": "",
    "creator": "",
    "departmentId": "f2036fa833c411eba83a13a7a34a2f7b,15469405c4cc11e9911f05ea727287d9,6c758fa655eb11e9940b25457df29ed4",
    "groupName": "待订",
    "groupScope": "组织机构>刘凯集团, 组织机构>景泰新能源（上海）有限公司, 组织机构>集团",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "id": "11eb7a72bf5aa076a2cc450f9487f3c3",
    "updateDate": "",
    "trainConfig": {},
    "msgId": "trip.standard",
    "exceedBook": [
      {
        "flightExceedBookVO": {
          "exceedControlMode": "EXCEED_BOOK",
          "exceedEffectNode": "BILL_AFTER"
        },
        "hotelExceedBookVO": {
          "exceedControlMode": "EXCEED_NOTBOOK_NOTVISIBLE",
          "exceedEffectNode": "BILL_BEFORE"
        },
        "trainExceedBookVO": {
          "exceedControlMode": "EXCEED_BOOK",
          "exceedEffectNode": "BILL_BEFORE"
        },
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
      "Title": "总经理",
      "insuranceData": {
        "companyCreditUnifyNum": "9111010875872474XN",
        "employ": true,
        "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
        "sellType": "SELL"
      },
      "name": "黄珊珊一",
      "phone": "15925665404",
      "ruleId": "104",
      "standard": [
        {
          "SeatType": "二等座;无座",
          "TrainType": "动车"
        },
        {
          "SeatType": "硬卧;硬座",
          "TrainType": "其它"
        },
        {
          "SeatType": "二等座;无座",
          "TrainType": "高铁"
        }
      ]
    },
    "data": [
      {
        "HasStandard": true,
        "StandardDes": "按照级别控制",
        "Title": "总经理",
        "insuranceData": {
          "companyCreditUnifyNum": "9111010875872474XN",
          "employ": true,
          "ruleInsuranceNO": "78787777,QX000000128042,QX000000128431,QX000000128428",
          "sellType": "SELL"
        },
        "name": "黄珊珊一",
        "phone": "15925665404",
        "ruleId": "104",
        "standard": [
          {
            "SeatType": "二等座;无座",
            "TrainType": "动车"
          },
          {
            "SeatType": "硬卧;硬座",
            "TrainType": "其它"
          },
          {
            "SeatType": "二等座;无座",
            "TrainType": "高铁"
          }
        ]
      }
    ],
    "errmsg": "success",
    "errno": "0",
    "extend": {
      "msgId": "trip.standard",
      "ScheduleType": "Train",
      "Type": "OW",
      "standardtype": "train",
      "DepartureCity": "上海",
      "DepartureCityGeoId": "L00509",
      "ArrivalCity": "常州",
      "ArrivalCityGeoId": "L00520",
      "DepartureStationCode": "",
      "ArrivalStationCode": "ESH",
      "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
      "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
      "DepartureDate": "2021-08-04",
      "ArrivalDate": "",
      "Userlist": [
        {
          "phone": "15925665404",
          "isOuter": "false",
          "employeeNumber": "0003"
        }
      ],
      "CountPerson": 1
    },
    "controlName": "ceshi",
    "controlScope": "组织机构>集团>自动化测试组, 组织机构>集团>元年>ECS产品部",
    "controlStatus": "TRUE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "88b1312255eb11e9940bb73524c3d1d0,2cf04a5c18be11eb90950b0e99165539,37079d4d496d11eab6a433590bfe9ff1,11eb75837c514acb99713d4ed1e7a609,78bb647b385e11ebb3ecb7b37633d0a2,11eb8afc9397e96fb86f1db5cea9af5c",
    "iHotelOverstep": "TRUE",
    "iHotelSharing": "TRUE",
    "iPlaneOverstep": "FALSE",
    "id": "11ebdf940e494a88b2024d0664ed6e34",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "TRUE",
    "inlandPlaneOverstep": "FALSE",
    "inlandTrainOverstep": "FALSE",
    "updateDate": "",
    "groupName": "122",
    "groupScope": "组织机构>集团>元年>ECS产品部, 组织机构>集团>元年>元年测试部, 组织机构>集团>公司>测试部, 组织机构>集团>公司>开发部, 组织机构>集团>公司>产品部, 组织机构>集团>公司>武汉测试部",
    "groupStatus": "TRUE",
    "groupType": "组织架构",
    "trainConfig": {},
    "msgId": "",
    "exceedBook": [
      {
        "flightExceedBookVO": [],
        "hotelExceedBookVO": [],
        "trainExceedBookVO": [],
        "userVO": {
          "employeedNumber": "",
          "phone": "15925665404"
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
        "ruleInsuranceNO": "QX000000128428",
        "sellType": "SELL"
      },
      "name": "吕方方",
      "phone": "13239177793",
      "ruleId": "82",
      "standard": {
        "Currency": "CNY",
        "CurrencyName": "人民币",
        "CurrencyNameUS": "",
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
          "ruleInsuranceNO": "QX000000128428",
          "sellType": "SELL"
        },
        "name": "吕方方",
        "phone": "13239177793",
        "ruleId": "82",
        "standard": {
          "Currency": "CNY",
          "CurrencyName": "人民币",
          "CurrencyNameUS": "",
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
      "msgId": "trip.standard",
      "ScheduleType": "Hotel",
      "Type": "OW",
      "standardtype": "hotel",
      "DepartureCity": "上海",
      "DepartureCityGeoId": "L00509",
      "ArrivalCity": "",
      "ArrivalCityGeoId": "",
      "CooperatorId": "5824c8a6-5fbf-11eb-adbe-0242ac110002",
      "CompanyId": "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
      "DepartureDate": "2021-08-24",
      "ArrivalDate": "2021-08-25",
      "RoomCount": 1,
      "Userlist": [
        {
          "isOuter": "false",
          "phone": "13239177793",
          "employeeNumber": "P23912"
        }
      ]
    },
    "controlName": "超标",
    "controlScope": "组织机构>集团>公司>测试部",
    "controlStatus": "FALSE",
    "controlType": "组织架构",
    "createDate": "",
    "creator": "",
    "departmentId": "11eb75837c514acb99713d4ed1e7a609,37079d4d496d11eab6a433590bfe9ff1,78bb647b385e11ebb3ecb7b37633d0a2,88b1312255eb11e9940bb73524c3d1d0,2cf04a5c18be11eb90950b0e99165539",
    "iHotelOverstep": "FALSE",
    "iHotelSharing": "FALSE",
    "iPlaneOverstep": "FALSE",
    "id": "11eb781991edfa6fb7633599d790e019",
    "inlandHotelOverstep": "TRUE",
    "inlandHotelSharing": "FALSE",
    "inlandPlaneOverstep": "TRUE",
    "inlandTrainOverstep": "TRUE",
    "updateDate": "",
    "groupName": "122",
    "groupScope": "组织机构>集团>公司>开发部, 组织机构>集团>公司>测试部, 组织机构>集团>公司>产品部, 组织机构>集团>元年>产品部, 组织机构>集团>元年>元年测试部",
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
          "phone": "13239177793"
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
    "hotelCity": "南京市"
  },
  "travelType": "train",
  "originCity": "长沙",
  "travelBeginDate": "2021-08-12 10:00:00",
  "travelEndDate": "2021-08-13 10:00:00",
  "ivInstruction": "jumpTrain"
}
const flightListFilterData = {
  "travelEndDate": "2021-08-16 17:00:00", // "2021-08-09 11:00:00",
  "travelType": "flight",
  "ivInstruction": "flightListFilter",
  "travelBeginDate": "2021-08-16 12:00:00", // "2021-08-09 08:00:00",
  "airExtendParam": {
    "airCabinLevel": "商务舱",
    "flightCode": null,
    "airCompany": "", // "南方航空",
    "standardFlight": "所有航班" //"所有航班",  // 合标航班  所有航班
    // "directFlight": "" // "仅看直飞" //仅看直飞  隐藏共享航班
  }
}
const flightListBackFilterData = {
  "travelEndDate": "2021-08-09 11:00:00",
  "travelType": "flight",
  "ivInstruction": "flightListBackFilter",
  "travelBeginDate": "2021-08-09 08:00:00",
  "airExtendParam": {
    "airCabinLevel": "经济舱",
    "flightCode": null,
    "airCompany": "南方航空",
    "standardFlight": "所有航班",  // 合标航班  所有航班
    "directFlight": "仅看直飞" //仅看直飞  隐藏共享航班
  }
}
const trainListFilterData = {
  "travelEndDate": "2021-08-06 24:00:00",
  "travelType": "train",
  "ivInstruction": "trainListFilter",
  "travelBeginDate": "2021-08-06 18:00:00",
  "airExtendParam": {
    "trainType": "动车",  // 高铁 动车 普通
    "trainCode": null,
    "standardTrain": "合规车次",  // 合规车次  所有车次
  }
}
const trainListBackFilterData = {
  "travelEndDate": "2021-08-06 12:00:00",
  "travelType": "train",
  "ivInstruction": "trainListBackFilter",
  "travelBeginDate": "2021-08-06 08:00:00",
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
  data: hotelListFilterData
};
const iframeUrl = "http://192.168.0.100:12025/#/redirect?authenticate=a1IyaTJ0L3FBcXhzMjdxM2xDRWVvTW5GSHBKQWZOZkYvK3F4aGJYdjZZbWxmZ1plWngyOHh1R3RxN0hSZjNXb3BrbGxqaFUxT0kra1BKVTNySjNVeXc9PQ==&travelRequisitionNo=CLSQFK012104080006&itemDescription=&tripInfoId=&itineraryType=all&leaveTripDate=unlimited&returnTripDate=unlimited&departureCity=unlimited&arrivalsCity=unlimited&bookingType=&isSubmitItineraryOnlyWithFlight=yes&callbackURL=&companyId=b4bac71e-a4d2-c835-02f0-08d6d9509d1a&cooperatorId=97727ed9-3c6f-11e8-91e7-02004c4f4f50&returnURL=&businessType=&action=index&routerName=&lang=zh-CN&otherTravelersEnable=true&method=postMessage";
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
    // 默认是 父 window发出的消息
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
  pm.send(standardObj[ScheduleType], ykbWindow)
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
  console.log("parent receive,ivRouteChange:", data);
  const originalData = data.data;
  const { msgId, data: routeData } = JSON.parse(originalData);
  console.log("msgId:", msgId, "routeData:", routeData);
});

const eleBtn = document.querySelector(".btn-send-msg")
eleBtn.onclick = () => {
  // flightListBackFilterData.travelEndDate = "2021-08-06 17:00:00",
  hotelListFilterData.airExtendParam.hotelLevel = "经济连锁"
  // flightListFilterData.airExtendParam.airCabinLevel = "经济舱"
  // trainListFilterData.airExtendParam.trainType = "高铁"
  pm.send(voiceData, ykbWindow)
}


