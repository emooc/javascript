window.onload=function(){
    // 获取页面元素
    var oReportBtn = document.querySelector('.reportBtn'); //发表按钮
    var oReportVal = document.querySelector('.reportVal'); //发表内容
   
    //发表按钮点击事件
    oReportBtn.onclick=function(){
        //获取发表内容
        var reportContent = oReportVal.value;

        //创建li
        var tagLi = document.createElement('li');
        var attrClassLi = document.createAttribute('class');
        attrClassLi.value = 'speekItem';
        tagLi.setAttributeNode(attrClassLi);
        //创建li > div
        var tagDiv = document.createElement('div');
        var attrClassDiv = document.createAttribute('class');
        attrClassDiv.value = 'speekUser';
        tagDiv.setAttributeNode(attrClassDiv);
        //创建 li > div > img
        var tagImg = document.createElement('img');
        var attrSrcImg = document.createAttribute('src');
        attrSrcImg.value = 'imgs/photo.jpg';
        tagImg.setAttributeNode(attrSrcImg);
        //创建li > div > span
        var tagSpan = document.createElement('span');
        tagSpan.innerText="前端小师弟";
        //创建li >div > time
        var tagTime = document.createElement('time');
        tagTime.innerText='20:20';
        // 创建 li > p
        var tagP = document.createElement('p');
        var attrClassP = document.createAttribute('class');
        attrClassP.value = 'speekVal';
        tagP.setAttributeNode(attrClassP);

        // 给创建好的 p 设置内容
        tagP.innerText = reportContent;

        //动态追加标签,如果没有帖子，则在ul里面追加，如果有帖子，则在第一个li前面追加
        var oSpeek = document.querySelector('.speek');
        var aSpeekItem = oSpeek.querySelectorAll('.speekItem');

        if(aSpeekItem.length == 0){
            oSpeek.appendChild(tagLi);

            tagLi.appendChild(tagDiv);
            tagDiv.appendChild(tagImg);
            tagDiv.appendChild(tagSpan);
            tagDiv.appendChild(tagTime);
            tagLi.appendChild(tagP);
        }else{
            oSpeek.insertBefore(tagLi,aSpeekItem[0]);

            tagLi.appendChild(tagDiv);
            tagDiv.appendChild(tagImg);
            tagDiv.appendChild(tagSpan);
            tagDiv.appendChild(tagTime);
            tagLi.appendChild(tagP);
        }

    }

}