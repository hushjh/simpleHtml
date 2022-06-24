const mockData = require("./mockData");
class Mock{
  mock(path) {
    return mockData[path];
  }
}
const mockIns = new Mock();
module.exports = mockIns;
