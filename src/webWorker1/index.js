var numdiv;
var work=null;
window.onload = function(){
	numdiv = document.getElementById("numdiv");
	start = document.getElementById("start");
	stop = document.getElementById("stop");

	start.onclick = startwork;
	stop.onclick = function(){
		work.terminate();  //终止 web worker，并释放资源	
		work=null;
	}
}
	
function startwork(){
	//判断浏览器是否支持worker
	if(typeof(Worker)!=="undefined"){
		//判断worker对象work是否存在，不存在则创建，指定work.js的文件路径
		if(typeof(work)=="undefined" || work==null){
			work = new Worker("./worker.js");  
		}
		//监听事件，当web worker传递消息时，会执行事件监听器中的代码
		work.onmessage = function(e){
			numdiv.innerHTML = e.data;	
		}
	}
	else{
		numdiv.innerHTML = "您的浏览器不支持worker"
	}
}