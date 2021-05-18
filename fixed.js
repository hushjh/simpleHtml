const pySegSort=(arr) =>{
  if (!String.prototype.localeCompare) return null
  let letters = 'abcdefghjklmnopqrstwxyz'.split('')
  let zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')
  let segs = []
  letters.forEach((item, i) => {
      let cur = { letter: item, data: [] }
      arr.forEach((item) => {
          if(item.localeCompare(zh[i])>=0&&item.localeCompare(zh[i+1])<0){
              cur.data.push(item)
          }         
      })
      if (cur.data.length) {   
              cur.data.sort(function(a, b) {
                  return a.localeCompare(b, 'zh')
              })
              segs.push(cur)
          }
  })

  return segs
}
const pySegSortNew = () => {
  if(arrNew.length == 0) return;
  if (!String.prototype.localeCompare) return null;
  var letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split("");
  var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");
  var segs = []; // 存放数据
  var res = {};
  let curr;
  var re = /[^\u4e00-\u9fa5]/;//中文正则
  var pattern = new RegExp("[`\\-~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？12345678990]"); //特殊符号

  letters.filter((items, i) => {
    curr = {
        initial: '', //字母
        data: [] ,  //数据
      };
    arrNew.map((v, index) => {
      // 特殊字符
      if (pattern.test(v.cityName[0])) {
        if ((!zh[i - 1] || zh[i - 1].localeCompare(v.cityName) <= 0) && v.cityName.localeCompare(zh[i]) == -1) {
          curr.data.push(v);
        }
      }
      // 判断首个字是否是中文 
      if (re.test(v.cityName[0])) {
        // 英文 
        if (v.cityName[0].toUpperCase() == items) {
          curr.data.push(v);
        }
      } else {
        // 中文
        if ((!zh[i - 1] || zh[i - 1].localeCompare(v.cityName) <= 0) && v.cityName.localeCompare(zh[i]) == -1) {
          curr.data.push(v);
        }
      }

    })

      if ( curr.data.length) {
        curr.initial = letters[i]
        segs.push(curr);
        curr.data.sort((a, b) => {
          return a.cityName.localeCompare(b.cityName);
        });             
      }
  })
  res.segs = Array.from(new Set(segs)) //去重
  console.log(res);
  return res;
}
let arr = ['白案','百搭','白菜','百旺','王','李','张','刘','陈','杨','黄','吴','赵','周','的','徐','孙','马','朱','胡','林','郭','何','高','罗','','郑','梁','谢','宋','唐','许','邓','冯','韩','曹','曾','彭','白大','萧','蔡','F','潘','田','董','袁','于','余','','叶','蒋','杜','苏','魏','程','吕','丁','沈','任','白','卞']
console.log(pySegSort(arr))

let arrNew =[
  { id: "v1", cityName: "阿里a" },
  { id: "v2", cityName: "试试s" },
  { id: "v3", cityName: "传参" },
  { id: "v4", cityName: "版本" },
  { id: "v5", cityName: "天津t" },
  { id: "v6", cityName: "安徽a" },
  { id: "v7", cityName: "阿道夫a" },
  { id: "v8", cityName: "匹配p" },
  { id: "v9", cityName: "海南h" },
  { id: "v10", cityName: "请求q" },
  { id: "v11", cityName: "问我" },
  { id: "v12", cityName: "恩恩" },
  { id: "v13", cityName: "让人" },
  { id: "v14", cityName: "英语" },
  { id: "v15", cityName: "已寄" },
  { id: "v16", cityName: "公共" },
  { id: "v17", cityName: "张家口z" },
  { id: "v17", cityName: "A张家口z" },
  { id: "v17", cityName: "CC张家口z" },
  { id: "v17", cityName: "D张家口z" },
  { id: "v17", cityName: "d张家口z" },
  { id: "v17", cityName: "d张家口z" },
  { id: "v17", cityName: "!张家口z" },
  { id: "v17", cityName: "-张家口z" },
  { id: "v17", cityName: "0张家口z" },
  { id: "v17", cityName: "=张家口z" },
  { id: "v17", cityName: "padsjfo" },
  { id: "v17", cityName: "放学" },
]

console.log(pySegSortNew(arrNew))
