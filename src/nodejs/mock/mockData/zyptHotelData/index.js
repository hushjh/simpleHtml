const mockData = {};
// 酒店配置
mockData["/core/hotel/order/checkStandard"] = require("./checkStandard.js");
// 酒店配置
mockData["/global/customer/bookConf/hotel/get"] = require("./hotelBookConf.js");
// 重单验证
mockData["/core/hotel/order/repeatOrderValidate"] = require("./orderRepeatOrderValidate.js");
// 预订验证
mockData["/core/hotel/order/bookingValidate"] = require("./orderBookingValidate.js");
// geo数据
mockData["/core/hotel/geo/info"] = require("./geoInfo.js");
// 关键字补全
mockData["/core/hotel/keyword/completion"] = require("./keywordCompletion.js");
// 城市查询
mockData["/core/hotel/area/info"] = require("./areaInfo.js");
// 酒店列表
mockData["/core/hotel/hotels/query"] = require("./hotelsQuery.js");
// 基础详情
mockData["/core/hotel/base/info"] = require("./baseInfo.js");
// 房型房态
mockData["/core/hotel/detail/info"] = require("./detailInfo.js");
// 订单详情
mockData["/core/hotel/order/detail"] = require("./orderDetail.js");
module.exports = mockData;