window.onload=function(){

    var mh1 = document.querySelector('.mh1');
    var mh2 = document.querySelector('.mh2');
    var hh1 = document.querySelector('.hh1');
    var hh2 = document.querySelector('.hh2');

    console.log(mh1.classList)


    var sMinutes = null;
    var aMinutes = null;
    var sHours = null;
    var aHours = null;

    // 时间补零函数封装
    function fnZeroFill(timeStr) {
        if (timeStr <= 9) { timeStr = '0' + timeStr; }
        return ''+timeStr;
    }


    
    /**
     * fnAddClassName 给对应位置添加类名，显示对应数字
     */
    function fnAddClassName(num,position){
      
        switch (parseInt(num)) {
            case 0:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 1:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 2:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 3:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 4:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 5:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 6:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 7:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 8:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            case 9:
                if(position.classList.length>3){
                    position.classList.remove(position.classList[2])
                }
                position.classList.add('led_num'+num);
                break;
            default: console.log("错误"+num);break;
        }
    }

    /**
     * 展示时间函数
     */
    function fnShowTime(){
        // 获取小时
        sHours = fnZeroFill(new Date().getHours());
        aHours = sHours.split('');
        // 获取分钟
        sMinutes = fnZeroFill(new Date().getMinutes());
        aMinutes = sMinutes.split('');

        // 添加类名
        fnAddClassName(aMinutes[0],mh1);
        fnAddClassName(aMinutes[1],mh2);
        fnAddClassName(aHours[0],hh1);
        fnAddClassName(aHours[1],hh2);
    }
    fnShowTime();
    setInterval(fnShowTime,1000)

    // 展示上下午
    var oAmpm = document.querySelector(".ampm"); // 获取页面元素
    var date = new Date();   // 时间函数
    function fnShowAmpm(){
        var hours =  date.getHours();
        // 判断上下午
        if(hours < 12){
            oAmpm.firstElementChild.style.display="block";
            oAmpm.lastElementChild.style.display="none";
        }else{
            oAmpm.firstElementChild.style.display="none";
            oAmpm.lastElementChild.style.display="block";
        }
    }
    fnShowAmpm();
    setInterval(fnShowAmpm,1000*60*60)




    


 
    
    
    


    
    
    

}