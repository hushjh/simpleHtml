let ele = document.querySelector('.wrap')

// 获取元素内联样式
console.log("eleWidth:", ele.style.width)
console.log("eleMarginTop:", ele.style.marginTop)
console.log("eleMarginLeft:", ele.style.marginLeft)

// 获取元素内嵌样式
console.log("eleWidth:", document.styleSheets[1].cssRules[0].style.width)
console.log("eleMarginTop:", document.styleSheets[1].cssRules[0].style.marginTop)
console.log("eleMarginLeft:", document.styleSheets[1].cssRules[0].style.marginLeft)

// 获取通过任意方式定义的样式
console.log("eleWidth:", window.getComputedStyle(ele).width)
console.log("eleMarginTop:", window.getComputedStyle(ele).marginTop)
console.log("eleMarginLeft:", window.getComputedStyle(ele).marginLeft)