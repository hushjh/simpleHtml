const action = () => {
    return {
        "code": 10000,
        "data": {
            "data": {
                "phone": "18170002345",
                "standard": [
                    {
                        "moneyStandard": 200,
                        "currency": "￥",
                        "minPriceStatus": 1,
                        "bookStrategy": true,
                        "date": null
                    }
                ]
            },
            "sourceData": [
                {
                    "phone": "18170002345",
                    "standard": [
                        {
                            "moneyStandard": 200,
                            "currency": "￥",
                            "minPriceStatus": 1,
                            "bookStrategy": true,
                            "date": "2022-08-25T16:00:00.000+00:00"
                        },
                        {
                            "moneyStandard": 200,
                            "currency": "￥",
                            "minPriceStatus": 1,
                            "bookStrategy": true,
                            "date": "2022-08-26T16:00:00.000+00:00"
                        },
                        {
                            "moneyStandard": 200,
                            "currency": "￥",
                            "minPriceStatus": 1,
                            "bookStrategy": true,
                            "date": "2022-08-27T16:00:00.000+00:00"
                        }
                    ]
                }
            ]
        },
        "message": "成功"
    }
}

module.exports = action();