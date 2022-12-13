const action = () => {
    return {
        "Code": 0,
        "Message": "查询成功",
        "Result": [
            {
                "member_code": "",
                "supplier_code": "xiecheng",
                "mobile": "17764007685",
                "id_number": null,
                "type": 1, // 1：未绑定、2：已绑定
                "status": "I", //  I：在用、X：注销、O：停用、E：状态获取失败
                "logo": "https://ykb.cn-bj.ufileos.com/supplier/ctrip.png"
            },
            {
                "member_code": "",
                "supplier_code": "huazhu",
                "mobile": "17764007684",
                "id_number": null,
                "type": 1,
                "status": "O",
                "logo": "http://ykb.cn-bj.ufileos.com/supplier/huazhu.png"
            },
            {
                "member_code": "",
                "supplier_code": "meituan",
                "mobile": "17764007680",
                "id_number": null,
                "type": 1,
                "status": "I",
                "logo": "https://ykb.cn-bj.ufileos.com/supplier/meituan.png"
            }
        ]
    }
}

module.exports = action();