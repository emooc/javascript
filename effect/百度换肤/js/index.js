window.onload=function(){
    // 实现皮肤显示按钮
    var oBtn = document.querySelector('.open_skill');
    var oSikls = document.querySelector('.sikls');
    var oCloseBtn = document.querySelector('.close_btn');
    // 点击按钮显示皮肤区域
    oBtn.onclick=function(){
        oSikls.style.display="block";
    }
    // 关闭按钮关闭皮肤区域
    oCloseBtn.onclick=function(){
        oSikls.style.display="none";
    }


    var oSiklList = document.querySelector('.sikl');
    var oSiklListItem = oSiklList.querySelectorAll('li');
    var oPreview = document.querySelector('.preview');
    var oBody = document.querySelector("body");
    for (let i = 0; i < oSiklListItem.length; i++) {
        // 实现皮肤区域预览特效
        oSiklListItem[i].onmouseover=function(){
            // 获取列表图片src属性
            sSiklsImg = this.firstElementChild.getAttribute("src");
            oPreview.setAttribute("src",sSiklsImg)
        }
        // 实现网页更换皮肤特效
        oSiklListItem[i].onclick=function(){
            // 获取列表图片src属性
            sSiklsImg = this.firstElementChild.getAttribute("src");
            oBody.style.background="url('"+sSiklsImg+"')";
            oBody.style.backgroundSize="cover";
            oBody.style.backgroundRepeat="no-repeat";
        }

    }

    


}