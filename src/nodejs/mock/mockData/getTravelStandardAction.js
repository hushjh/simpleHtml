
const getTravelStandardAction = () => {
  return {
    Code: "SUCCESS",
    Message: "获取差旅标准成功.",
    Result: {
      trainStandard: null,
      flightStandard: null,
      hotelStandard: {
        departureMaxPrice: 300,
        data: {
          standard: {
            netPriceStatus: null,
            moneyStandard: 301,
            standardDes: "按照级别控制",
            currencyNameUS: "CNY",
            currency: "CNY",
            hasStandard: true,
            currencyName: "人民币",
            international: null
          },
          seasonHotelStandard: [
            {
              currency: "CNY",
              currencyName: "人民币",
              currencyNameUS: "RMB",
              hasStandard: true,
              moneyStandard: 600.0,
              standardDes: "按照级别控制",
              statue: "1",
              seasonType: "STANDARD", //节假日类型
              seasonTypeDays: 2, //当前类型天数
              seasonTypeAmountSum: 1200.0, //当前类型标准总金额
              seasonDateList: [
                //节假日时间段列表
                {
                  date: "06-28",
                  startDate: "2022/04/06",
                  endDate: "2022/04/12"
                },
                {
                  date: "06-28",
                  startDate: "2022/04/014",
                  endDate: "2022/04/15"
                }
              ]
            },
            {
              currency: "CNY",
              currencyName: "人民币",
              currencyNameUS: "RMB",
              hasStandard: true,
              moneyStandard: 600.0,
              standardDes: "按照级别控制",
              statue: "1",
              seasonType: "PEAK_SEASON", //节假日类型
              seasonTypeDays: 2, //当前类型天数
              seasonTypeAmountSum: 1200.0, //当前类型标准总金额
              seasonDateList: [
                //节假日时间段列表
                {
                  date: "06-28",
                  startDate: "2022/04/06",
                  endDate: "2022/04/12"
                },
                {
                  date: "06-28",
                  startDate: "2022/04/014",
                  endDate: "2022/04/15"
                }
              ]
            }
          ],
          phone: "17666114377"
        },
        sourceData: [
          {
            phone: "17666114377",
            standard: {
              moneyStandard: 300,
              currency: "CNY",
              currencyNameUS: "CNY",
              currencyName: "人民币",
              hasStandard: true,
              standardDes: "按照级别控制",
              netPriceStatus: null,
              international: null
            },
            seasonHotelStandard: [
              {
                currency: "CNY",
                currencyName: "人民币",
                currencyNameUS: "RMB",
                hasStandard: true,
                moneyStandard: 600.0,
                standardDes: "按照级别控制",
                statue: "1",
                seasonType: "STANDARD", //节假日类型
                seasonTypeDays: 2, //当前类型天数
                seasonTypeAmountSum: 1200.0, //当前类型标准总金额
                seasonDateList: [
                  //节假日时间段列表
                  {
                    date: "06-28",
                    startDate: "2022/04/06",
                    endDate: "2022/04/12"
                  },
                  {
                    date: "06-28",
                    startDate: "2022/04/014",
                    endDate: "2022/04/15"
                  }
                ]
              },
              {
                currency: "CNY",
                currencyName: "人民币",
                currencyNameUS: "RMB",
                hasStandard: true,
                moneyStandard: 600.0,
                standardDes: "按照级别控制",
                statue: "1",
                seasonType: "PEAK_SEASON", //节假日类型
                seasonTypeDays: 2, //当前类型天数
                seasonTypeAmountSum: 1200.0, //当前类型标准总金额
                seasonDateList: [
                  //节假日时间段列表
                  {
                    date: "06-28",
                    startDate: "2022/04/06",
                    endDate: "2022/04/12"
                  },
                  {
                    date: "06-28",
                    startDate: "2022/04/014",
                    endDate: "2022/04/15"
                  }
                ]
              }
            ]
          },
          {
            phone: "19146575486",
            standard: {
              moneyStandard: 300,
              currency: "CNY",
              currencyNameUS: "CNY",
              currencyName: "人民币",
              hasStandard: true,
              standardDes: "按照级别控制",
              netPriceStatus: null,
              international: null
            },
            seasonHotelStandard: [
              {
                currency: "CNY",
                currencyName: "人民币",
                currencyNameUS: "RMB",
                hasStandard: true,
                moneyStandard: 600.0,
                standardDes: "按照级别控制",
                statue: "1",
                seasonType: "NEW_YEARS_DAY", //节假日类型
                seasonTypeDays: 2, //当前类型天数
                seasonTypeAmountSum: 1200.0, //当前类型标准总金额
                seasonDateList: [
                  //节假日时间段列表
                  {
                    date: "06-28~06-29",
                    startDate: "2022/04/06",
                    endDate: "2022/04/12"
                  },
                  {
                    date: "06-28~06-29",
                    startDate: "2022/04/014",
                    endDate: "2022/04/15"
                  }
                ]
              },
              {
                currency: "CNY",
                currencyName: "人民币",
                currencyNameUS: "RMB",
                hasStandard: true,
                moneyStandard: 600.0,
                standardDes: "按照级别控制",
                statue: "1",
                seasonType: "NEW_YEARS_DAY", //节假日类型
                seasonTypeDays: 2, //当前类型天数
                seasonTypeAmountSum: 1200.0, //当前类型标准总金额
                seasonDateList: [
                  //节假日时间段列表
                  {
                    date: "06-28~06-29",
                    startDate: "2022/04/06",
                    endDate: "2022/04/12"
                  },
                  {
                    date: "06-28~06-29",
                    startDate: "2022/04/014",
                    endDate: "2022/04/15"
                  }
                ]
              }
            ]
          }
        ],
        seasonStandard: true,
        IsConfigureUrl: true
      },
      intHotelStandard: null,
      intFlightStandard: null,
      intTrainStandard: null
    }
  };
};
module.exports = getTravelStandardAction();
