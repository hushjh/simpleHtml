const zyptHotel = require("./zyptHotelData");
const tripHotel = require("./zyptTripData");
const scheduleHotel = require("./scheduleHotelData");
const mockData = { ...zyptHotel, ...tripHotel, ...scheduleHotel };
mockData["/schedule/getStandard"] = require("./getTravelStandardAction.js");
module.exports = mockData;