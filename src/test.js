// var counter = 0;
// var hasMore = true;
// var observer = new IntersectionObserver(
//   function(changes) {
//     console.log("changes[0].intersectionRatio:", changes[0].intersectionRatio);
//     if(changes[0].intersectionRatio === 1 && hasMore) {
//       setTimeout(()=>{loadItems(100)}, 3000);
//       console.log("load new items");
//     }
//   },
//   {
//     threshold: [0, 0.25, 0.5, 0.75, 1]
//   }
// )
// observer.observe(document.querySelector('.bottom'));

// function loadItems(num) {
//   var ulEle = document.querySelector(".list");
//   for(var i = 0; i< num; i++) {
//     // var liEle = `<li class="item">${counter}</li>`;
//     var liEle = document.createElement("li");
//     liEle.setAttribute("class", 'item');
//     liEle.innerHTML = counter;
//     // var tempEle = document.createElement(liEle);
//     ulEle.appendChild(liEle);
//     counter++;
//   }
//   hasMore = true; 
// }
// iframe = document.querySelector("#ykb")
// conWindow = iframe.contentWindow
// doc = conWindow.document
// ele = `<html>  <head>    <meta http-equiv=\"Content-Type\" content=\"text/html;\">    <meta charset=\"utf-8\">    <title>消费平台跳转</title>  </head>  <body>    <script>window.location.href='https://testtripm.51ykb.com/?v=1623130554759#/redirect?authenticate=anhXWUFtVFg0L1RuWjFTK1UzNDZRVHlMSXFBMTB3TVhIMS9IQjhRTG9xcDBUQVlqNjVYaFNFUjlicjROSkNWbzVDVUVUczJ1TC9xaTFNVlQvcjFhK3c9PQ==&useAppLogin=false&thirdPartyAuth=iframe&travelRequisitionNo=&itemDescription=&tripInfoId=&itineraryType=all&leaveTripDate=unlimited&returnTripDate=unlimited&departureCity=unlimited&arrivalsCity=unlimited&bookingType=&isSubmitItineraryOnlyWithFlight=yes&travelerInfo=&callbackURL=&companyId=17fd0ec4-9631-cdeb-545c-08d7f3f9f98d&cooperatorId=770e5971-bc3c-11ea-9368-0242ac110002&returnURL=&businessType=&action=index&routerName=&lang=zh-CN&otherTravelersEnable=&method=&trainControlSwitch=false&tripConf=';</script>  </body></html>`
// doc.write(ele)
// function getCommentValue (ele) {
//   var nodes = ele.childNodes;
//   var length = nodes.length;
//   var node = '';

//   for (var i = 0; i < length; i++) {
//       if (nodes[i].nodeName === '#comment') {
//         node = nodes[i];
//           break;
//       }
//   }

//   return node;
// }
// const didiUrl = "https://open.es.xiaojukeji.com/webapp/feESWebappLogin/index"
// const eleBtn = document.querySelector(".jump");
// eleBtn.onclick = () => {
//   console.log("click");
//   window.location.href = didiUrl;
// }