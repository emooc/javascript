window.onload = function () {
    // 获取所有 table
    var aTable = document.querySelectorAll('table');
    // 循环遍历 tr
    for (let i = 0; i < aTable.length; i++) {
        var aTr = aTable[i].querySelectorAll('tr');
        // 循环遍历偶数行
        for (let i = 0; i < aTr.length; i++) {
            if (i % 2 == 0) {
                aTr[i].style.background = '#f2f2f2';
            } else {
                aTr[i].style.background = '#fff';
            }
        }
    }
}