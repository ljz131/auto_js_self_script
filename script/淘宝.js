//2019-12-09
//当前版本：1.0.6
//可用于[全民夺宝收能量]、[金币庄园领肥料]、[金币庄园领水滴]
//需要手动打开领取页面，在淘宝人生界面中有概率无法跳转回来
auto.waitFor();

var height = device.height;
var width = device.width;
var model = device.model;
var sdkVersion = device.release;
toast("设备宽" + width + "；设备高" + height + "；手机型号" + model + "；安卓版本" + sdkVersion);

setScreenMetrics(width, height);
toast("设备高"+height);

autoplay();
    
function autoplay(){
    var clickStringArray = ["打卡","签到"]
    clickStringArray.forEach(click)

    var jumpStringArray = ["去浏览","去搜索","去逛逛"];
    jumpStringArray.forEach(swipe22s)    
    toast("结束");
}

//只需要点击的事件
function click(act){
    if(textEndsWith(act).exists()){
        textEndsWith(act).findOne().click();
        sleep(1600);
        toast(act+"成功");
    }
    sleep(2000);
    toast("完成["+act+"]检测");
}

//需要滑动浏览20秒的事件
function swipe22s(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(8000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(2200);
        back();
        }
        sleep(1600);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}