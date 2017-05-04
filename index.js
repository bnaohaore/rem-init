//计算屏幕尺寸
module.exports=function (xx) {
    console.log(xx)
    console.log('rem初始化1rem=100px')
    if(!xx){
        console.log('请设置设计尺寸如：ui设计尺寸为640px;const rem=require(rem-init);rem(640)')
        return
    }
    var met=document.createElement('meta');
    met.setAttribute('name','viewport');
    met.setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0');
    document.getElementsByTagName("head")[0].appendChild(met);
    var psd_width = xx,
        win_width = window.outerWidth || window.innerWidth;
    var style = document.createElement('style');

    rem = win_width / psd_width * 200;
    style.innerHTML = "html{font-size:" + rem + "px!important;}";
    document.getElementsByTagName("head")[0].appendChild(style);

    window.onload=function() {
        win_width = window.innerWidth;
        rem = win_width / psd_width * 200;

        style.innerHTML = "html{font-size:" + rem + "px!important;}"
    }
}

