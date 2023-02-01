const action = () => {
  return {
    code: 10000,
    data: {
      type: 1,
      message: "抱歉，房型价格已发生变化，当前价格为23元",
      data: {
        avgprice: 23,
        nightlyrates: [
          {
            price: 23,
            otherAmout: 0,
            status: true,
            date: "2023-02-05",
            mealType: 3,
            mealNum: 0,
            identification:
              "a1d44436da958ad76498bc6bfbb29efe6e9071a0e482218f81d05662e750aee1bb74dbc23e1a8ad42b658144a6387fba",
          },
        ],
      },
    },
    message: "",
  };
}
module.exports = action();