var REG_NUMBER = /^([+-])?0*(\d+)(\.(\d+))?$/;
var ch = '零一二三四五六七八九';
var ch_u = '个十百千万亿';
var tenm = true;
var n0 = ch.charAt(0);

var getNumbResult = function (num) {
  var result = REG_NUMBER.exec(num.toString());
  if (result) {
    return {
      int: result[2],  //整数部分
      decimal: result[4], //小数部分
      minus: result[1] === "-",
      num: result.slice(1, 3).join('') // 带符号整数
    }
  }
}

clearZero = function (str, zero, type) {
  if (str == null) return "";
  var reg0 = ~"*.?+$^[](){}|\\/".indexOf(zero) ? "\\" + zero : zero;
  var arg_s = new RegExp("^" + reg0 + "+")
    , arg_e = new RegExp(reg0 + "+$")
    , arg_d = new RegExp(reg0 + "{2}", "g")
  str = str.toString();
  if (type == "^") {
    str = str.replace(arg_s, "");
  }
  if (!type || type == "$") {
    str = str.replace(arg_e, "");
  }
  if (!type || type == "nto1") {
    str = str.replace(arg_d, zero);
  }
  return str;
}

var encodeInt = function encodeInt(_int) {
  console.log("encode", _int);

  _int = getNumbResult(_int).int;
  var int = "";
  var _length = _int.length;
  if (_length == 1) {
    console.log("one length", _int);
    return ch.charAt(+_int);
  }

  if (_length <= 4) { //小于四位
    console.log("小于四位 _int", _int, _length, tenm);
    for (let i = 0, n = _length; n--;) {
      var _num = +_int.charAt(i);
      // 总长度为2时会出现10 被翻译成一十
      int += (tenm && _length == 2 && i == 0 && _num == 1) ? "" : ch.charAt(_num);
      int += (_num && n ? ch_u.charAt(n) : '')
      i++;
    }
    console.log("小于四位 int", int);
  } else {
    var d = _int.length / 4 >> 0;
    var y = _int.length % 4;
    while (y == 0 || !ch_u.charAt(3 + d)) {
      y += 4;
      d--;
    }
    console.log("_int=", _int);
    console.log("y=", y);
    console.log("_int.substr(0, y)=", _int.substr(0, y));
    console.log("ch_u.charAt(3 + d)=", ch_u.charAt(3 + d));
    console.log(`((_int.substr(y - 1, 2))=`,
      (_int.substr(y - 1, 2))
    );
    if (~(_int.substr(y - 1, 2).indexOf("0"))) {
      console.log('为什么会变零', _int, y - 1);
    }

    int = encodeInt(_int.substr(0, y), tenm) + ch_u.charAt(3 + d)
      + (~(_int.substr(y - 1, 2).indexOf("0")) ? n0 : '')
      + encodeInt(_int.substr(y), tenm)
    // console.log(`encodeInt(0000, tenm)`, encodeInt('0000', tenm));

  }
  console.log("result not clear:", int);
  int = clearZero(int, n0);
  console.log("result:", int);
  return int;
}

// encodeInt(10000)
// encodeInt(1000000)
encodeInt(10001)