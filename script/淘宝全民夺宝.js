// 2019-12-9 v1.0.5
auto.waitFor();

var height = device.height;

var width = device.width;

toast("设备宽" + width + "；设备高" + height + "；手机型号" + device.model + "；安卓版本" + device.release)

setScreenMetrics(width, height);

toast("设备高"+height);

autoplay();


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

    
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);
    toast("完成[签到]检测");
    var stringArray = ["去浏览","去搜索","去逛逛"];
    stringArray.forEach(swipe22s)    
    toast("结束");
}