function setCookie(a,b,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = a + "=" + b + "; " + expires;
}
function getCookie(a){
	var m = a + "=";
	var n = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = n[i].trim();
		if (c.indexOf(name)==0) { return c.substring(m.length,c.length); }
	}
	return "";
}

function makeCookie(){
	var button = document.getElementById('theme_change');
	var inner = getCookie("inner");
	if(inner !=""){
		if (inner != "🌙"){
			// 进入页面立即触发
			(()=>{
				// 兼容IE
				   if(document.all) {
					   document.getElementById("theme_change").click();
				   }
				   // 兼容其它浏览器
				   else {
					   var e = document.createEvent("MouseEvents");
					   e.initEvent("click", true, true);
					   document.getElementById("theme_change").dispatchEvent(e);
				   }
			})();
		}
	}
	else{
		setCookie("inner",button.innerHTML,1);
	}
}
// 主题切换功能
function theme_change() {
    // 切换字内容
    var button = document.getElementById('theme_change');
    var pattern = new RegExp('🌞', 'i');
    if (pattern.test(button.innerHTML)){
        button.innerHTML = "🌙";
    } else{
        button.innerHTML = "🌞";
    }	
    // 切换主题
    document.body.classList.toggle('dark-theme');
	setCookie("inner",button.innerHTML,1)
};