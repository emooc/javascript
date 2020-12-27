window.onload = function () {
    // 获取元素
    var oTime = document.querySelector('.time');

    // 时间补零函数封装
    function fnZeroFilling(timeStr) {
        if (timeStr <= 9) { timeStr = '0' + timeStr; }
        return timeStr;
    }

    // 星期数值转换
    function fnWeekTransformation(week){
        switch(week){
            case 1: week = "一"; break;
            case 2: week = "二"; break;
            case 3: week = "三"; break;
            case 4: week = "四"; break;
            case 5: week = "五"; break;
            case 6: week = "六"; break;
            default: week = "日"; break;
        }
        return week;
    }

    // 时间函数封装
    function fnShowTime() {
        // 时间函数
        var date = new Date();
        // 时间抽取
        var year = date.getFullYear();
        var month = fnZeroFilling(date.getMonth() + 1);
        var data = fnZeroFilling(date.getDate());
        var week = fnWeekTransformation(date.getDay());
        var hours = fnZeroFilling(date.getHours());
        var minutes = fnZeroFilling(date.getMinutes());
        var seconds = fnZeroFilling(date.getSeconds());

        // 时间拼接
        var time = year + "年" + month + "月" + data + "日" + "星期" +week + hours + "时" + minutes + "分" + seconds + "秒";
        // 标签输出
        oTime.innerText = time;
    }
    // 时间函数调用：解决1秒空白期bug
    fnShowTime();
    // 定时函数更新
    setInterval(fnShowTime, 1000)
}