function downloadTxt(){
  // 下载 textArea输入框中的内容
  var text = document.querySelector("#my-textarea").value;
  var blob = new Blob([text], { type: "text/plain" })
  const fileName = "test.txt";
  download(blob, fileName)
}
function downloadJson() {
  let obj = {
    age: 18,
    sex: '男'
  };
  const objStr = JSON.stringify(obj)
  const blob = new Blob([objStr], { type: 'application/json' });
  const fileName = "test.json"
  download(blob, fileName)
}
function downloadXml() {
  let obj = {
    age: 18,
    sex: '男'
  };
  const objStr = JSON.stringify(obj)
  const blob = new Blob([objStr], { type: 'application/xhtml+xml' });
  const fileName = "test"
  download(blob, fileName)
}

function downHttpPic() {
  const url = "https://tpc.googlesyndication.com/simgad/12002956395169632713?w=100&h=100"
  const xhr = new XMLHttpRequest();
  xhr.open("get", url)
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function() {
    const fileBlob = xhr.response
    download(fileBlob, 'myPic')
  }
}
function generatorTableHtml(list) {
  const trs = list.map((item) => {
    const tds = Object.keys(item).map((key) => {
      return `<td>${item[key]}</td>`
    })
    return `<tr>${tds.join("")}</tr>`
  });
  debugger;
  return `<html>
            <head>
              <meta charset='utf-8'>
            </head>
            <body>
              <table border='1'>
                ${trs.join("")}
              </table>
            </body>
          </html>`
}
function downTableExcel() {
  const listData = [
    {
      webName: '菜鸟教程',
      webUrl: 'https://www.runoob.com/'
    },
    {
      webName: 'MDN',
      webUrl: 'https://developer.mozilla.org/'
    }
  ]
  const tableHtml = generatorTableHtml(listData)
  const blob = new Blob([tableHtml], {type: "application/vnd.ms-excel"})
  download(blob, "table")
}
function download(blob, blobName){
  var a = document.createElement('a');
  a.download = blobName;
  const objUrl = window.URL.createObjectURL(blob);
  a.href = objUrl;
  a.target = "_blank"
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a);
  window.URL.revokeObjectURL(objUrl);
}