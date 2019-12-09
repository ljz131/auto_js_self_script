//提交前使用 git count确认版本
//当前为1.0.5
auto.waitFor();

var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)

setScreenMetrics(width, height);
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
}