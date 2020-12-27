window.onload = function () {
    // 时间补零函数封装
    function fnZeroFill(timeStr) {
        if (timeStr <= 9) { timeStr = '0' + timeStr; }
        return timeStr;
    }
    // 时间函数封装
    function fnShowTime() {
        // 时间函数
        var date = new Date();
        // 时间抽取
        var year = date.getFullYear();
        var month = fnZeroFill(date.getMonth()) + 1;
        var data = fnZeroFill(date.getDate());
        var hours = fnZeroFill(date.getHours());
        var minutes = fnZeroFill(date.getMinutes());
        var seconds = fnZeroFill(date.getSeconds());

        // 时间拼接
        var time = year + "年" + month + "月" + data + "日" + hours + "时" + minutes + "分" + seconds + "秒";
        // 页面输出
        document.write(time);
        // 页面清空
        document.close();
    }
    // 时间函数调用：解决1秒空白期bug
    fnShowTime();
    // 定时函数更新
    setInterval(fnShowTime, 1000)
}