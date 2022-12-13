const action = () => {
  return {
    "code": 10000,
    "message": "查询成功",
    "data": {
      "districts": [
        {
          "isHot": false,
          "id": "02010001",
          "name": "浦东新区"
        }
      ],
      "commericalLocations": [
        {
          "isHot": false,
          "id": "762076",
          "name": "大宁国际商业区"
        }
      ],
      "landmarkLocations": [
        {
          "isHot": false,
          "id": "62778388",
          "name": "上海虹桥国际机场"
        }
      ],
      "brandLocations": [
        {
          "isHot": false,
          "id": "40006",
          "name": "凯莱酒店"
        }
      ]
    }
  }
}
module.exports = action();