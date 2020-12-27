window.onload = function () {

    var s = document.querySelector('.s');
    var m = document.querySelector('.m');
    var h = document.querySelector('.h');

    function fnTime(){
        // 获取时间
        var date = new Date();
        // 已经度过的时间
        var milliseconds = date.getMilliseconds();
        var seconds = date.getSeconds();
        var minutes = date.getMinutes() + seconds / 60;
        var hours = date.getHours() + minutes / 60;
        console.log(hours+"时"+minutes+"分"+seconds+"秒")

        secondHandAngle = seconds*6;
        s.style.transform="rotate("+secondHandAngle+"deg)";

        minuteHandAngle = minutes * 6;
        m.style.transform="rotate("+minuteHandAngle+"deg)";

        hourHandAngle = hours * 30;
        h.style.transform="rotate("+hourHandAngle+"deg)";
    }

    fnTime();

    setInterval(fnTime, 1000)
}