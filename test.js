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