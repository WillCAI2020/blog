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