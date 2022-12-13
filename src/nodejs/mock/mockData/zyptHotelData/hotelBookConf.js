const action = () => {
  return {
    "code": 10000,
    "data": {
      "tenantId": 100000,
      "maxRoomNumber": 3,
      "maxCheckInNumber": 6,
      "refundOperation": "1",
      "openRebookLimit": true,
      "getLocation": true,
      "showDirectFilterButton": true,
      "defaultSelectDirectFilterButton": true,
      "showStandardFilterButton": true,
      "defaultSelectStandardFilterButton": true,
      "topAgree": true,
      "topAgreeDetailPage": 1,
      "topAgreeSubDetailPage": 1,
      "openRoomTypeLimit": false,
      "roomTypeLimitType": 1,
      "roomTypeLimitKeyWords": "test",
      "roomTypeLimitTips": "test测试",
      "excessSelfPaymentDifference": true,
      "excessSelfPaymentDifferenceMust": true,
      "openSameSexMergeRoom": true,
      "mergeRoomRank": "234,123",
      "showAllRoomer": true,
      "replaceHotelImageAddr": false,
      "openAbnormalOrderNotice": false
    },
    "message": "成功"
  }
}
module.exports = action();