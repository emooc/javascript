window.onload = function () {
    // 获取标题
    var oTitle = document.querySelector('.title');
    // 获取标题按钮
    var aTitleSpan = oTitle.querySelectorAll('span');
    // 获取内容
    var oContent = document.querySelector('.content');
    // 获取内容列表
    var aContentList = oContent.querySelectorAll('ul');
    // 循环遍历标题按钮
    for (let i = 0; i < aTitleSpan.length; i++) {
        // 标题按钮点击事件
        aTitleSpan[i].onclick = function () {
            // 标题按钮赋值索引
            this.index = i;
            // 内容列表排他思想
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