const zyptHotel = require("./zyptHotelData");
const tripHotel = require("./zyptTripData");
const mockData = { ...zyptHotel, ...tripHotel };
mockData["/schedule/getStandard"] = require("./getTravelStandardAction.js");
module.exports = mockData;