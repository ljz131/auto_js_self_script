//2019-12-09
//当前版本：1.0.5
//可用于[支付宝到店付款翻倍活动]
//需要手动打开领取页面，在某些界面有概率无法跳转回最初界面
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
    doAction("去完成");
    
    toast("结束");
}

function doAction(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(1600);
        var tmpTime = 2000 + Math.random()*5000;
        toast(tmpTime);
        sleep(tmpTime);
        while(!textContains("天天做任务赚翻倍豆").exists()){
            toast("不在初始页面");
            isInErrorPage();
            back();
            sleep(1600);
        }
        sleep(1600);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}

function isInErrorPage(){
    if(textContains("拒绝").exists()){
        textContains("拒绝").findOne().click();
        toast("不允许");
        sleep(1600);
    }
    if(textContains("不允许").exists()){
        textContains("不允许").findOne().click();
        toast("不允许");
        sleep(1600);
    }
    if(textContains("再玩玩").exists()){
        textContains("再玩玩").findOne().click();
        toast("再玩玩");
        sleep(1600);
    }
    if(textContains("系统繁忙").exists()){
        textContains("系统繁忙").findOne().click();
        toast("系统繁忙");
        sleep(1600);
    }
    if(textContains("确定").exists()){
        textContains("确定").findOne().click();
        toast("确定");
        sleep(1600);
    }
}