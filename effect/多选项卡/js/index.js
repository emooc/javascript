window.onload = function () {
    function tabs(tab_id) {
        var oTabId = document.querySelector(tab_id);
        var oTitle = oTabId.querySelector('.title');
        var aTitleSpan = oTitle.querySelectorAll('span');
        var oContent = oTabId.querySelector('.content');
        var aContentList = oContent.querySelectorAll('ul');

        for (let i = 0; i < aTitleSpan.length; i++) {
            aTitleSpan[i].onclick = function () {
                this.index = i;
                for (let i = 0; i < aContentList.length; i++) {
                    aContentList[i].style.display = 'none';
                }
                aContentList[this.index].style.display = 'block';

                // 标题按钮样式
                for (let i = 0; i < aTitleSpan.length; i++) {
                    aTitleSpan[i].className = '';
                }
                this.className = 'active'
            }
        }
    }
    tabs('#one');
    tabs('#two');
}