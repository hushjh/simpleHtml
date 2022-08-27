const action = () => {
  return {
    "code": 10000,
    "data": {
      "type": 0,
      "message": "验证通过、可预订",
      "data": {
        "avgprice": 1,
        "nightlyrates": [
          {
            "price": null,
            "otherAmout": null,
            "date": null,
            "identification": null
          }
        ]
      }
    },
    "message": ""
  }
}
module.exports = action();