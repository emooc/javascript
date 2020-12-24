window.onload = function () {
    // 获取全选按钮
    var oSelectAll = document.querySelector('.select_all');
    // 获取反选按钮
    var oSelectOther = document.querySelector('.select_other');
    // 获取取消按钮
    var oSelectCancel = document.querySelector('.select_cancel');
    // 获取选择列表
    var oCheckList = document.querySelector('.check_list');
    var aCheckListItem = oCheckList.querySelectorAll('li');


    oSelectAll.onclick = function () {
        for (let i = 0; i < aCheckListItem.length; i++) {
            var inputs = aCheckListItem[i].querySelector('input');
            inputs.checked = true;
        }
    }

    oSelectCancel.onclick = function () {
        for (let i = 0; i < aCheckListItem.length; i++) {
            var inputs = aCheckListItem[i].querySelector('input');
            inputs.checked = false;
        }
    }

    oSelectOther.onclick = function () {
        for (let i = 0; i < aCheckListItem.length; i++) {
            var inputs = aCheckListItem[i].querySelector('input');
            if (inputs.checked == false) {
                inputs.checked = true
            } else {
                inputs.checked = false
            }
        }
    }

}