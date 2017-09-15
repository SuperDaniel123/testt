
var isLoad = !!$.cookie('PHPSESSID')
var isLoadPage = location.pathname == '/dist/html/user/login.html'

if(isLoad && isLoadPage){
	location.href = '/dist';
}else if(!isLoad && !isLoadPage){
	location.href = '/dist/html/user/login.html'
}


NProgress.start();
window.onload = function(){
	NProgress.done()
}