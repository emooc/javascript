window.onload = function () {
    // 获取页面元素
    var oSendMessBtn = document.querySelector('.sendMessBtn');
    // 定义计时时间
    var count = 5;
    // 定义计时器名称
    var timer = null;
    // 点击发送短信按钮
    oSendMessBtn.onclick = function () {
        // 改变this的作用域一直志向oSendMessBtn
        var that = this;
        // 清除定时器
        clearInterval(timer);
        // 发送短信按钮不可用
        this.disabled = true;
        // 直接改变按钮内容
        this.innerText = "还剩" + count + "s";
        // 定时减少按钮时间
        function fn() {
            count--;
            // 如果 时间大于0，显示还剩多少时间
            if (count > 0) {
                that.innerText = "还剩" + count + "s";
            } else {
                // 否则显示重新发送，按钮可点击，重新改变计时，并清除定时器
                that.innerText = "重新发送";
                that.disabled = false;
                count = 5;
                clearInterval(timer);
            }
        }

        timer = setInterval(fn, 1000)
    }
}