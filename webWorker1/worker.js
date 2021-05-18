var num = 0;
function work(){
	postMessage(num);  //用于向 HTML页面传回一段消息
	num++;
	setTimeout(work,1000);
}
work();