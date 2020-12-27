window.onload=function(){
    //获取清零按钮
    var oZero = document.getElementById('zero');
    //获取结果区
    var oResult = document.getElementById('result');
    //获取运算符
    var aSymbol = document.getElementsByClassName('oper-key');
    //获取数字
    var aNumKey = document.getElementsByClassName('num-key');
    //获取等于按钮
    var oEqual = document.getElementById('equal');

    //清零按钮点击事件
    oZero.onclick=function(){
        oResult.innerText = '';
    }

    //数字键点击事件
    for(var i=0;i<aNumKey.length;i++){
        aNumKey[i].onclick=function(){
            oResult.innerText += this.innerText;
        }
    }

    //运算符点击事件
    for(var i=0;i<aSymbol.length;i++){
        aSymbol[i].onclick=function(){
            oResult.innerText += this.innerText;
        }
    }
    
    //等号点击事件
    oEqual.onclick=function(){

        //包含+号
        if(oResult.innerText.includes('+')){
            //字符串分割成数组：比如'9*6'  分割成['9','6']
            var aNewArray = oResult.innerText.split('+');
            var sum = parseFloat(aNewArray[0]) + parseFloat(aNewArray[1]);
            oResult.innerText = sum;
        }

        //包含-号
        if(oResult.innerText.includes('-')){
            //字符串分割成数组：比如'9*6'  分割成['9','6']
            var aNewArray = oResult.innerText.split('-');
            var sum = parseFloat(aNewArray[0]) - parseFloat(aNewArray[1]);
            oResult.innerText = sum;
        }

        //包含*号
        if(oResult.innerText.includes('*')){
            //字符串分割成数组：比如'9*6'  分割成['9','6']
            var aNewArray = oResult.innerText.split('*');
            //精度丢失问题
            var sum = parseFloat(aNewArray[0]) * parseFloat(aNewArray[1]);
            oResult.innerText = sum;
        }

        //包含÷号
        if(oResult.innerText.includes('÷')){
            //字符串分割成数组：比如'9*6'  分割成['9','6']
            var aNewArray = oResult.innerText.split('÷');
            var sum = parseFloat(aNewArray[0]) / parseFloat(aNewArray[1]);
            oResult.innerText = sum;
        }

        //包含%号
        if(oResult.innerText.includes('%')){
            //字符串分割成数组：比如'9*6'  分割成['9','6']
            var aNewArray = oResult.innerText.split('%');
            var sum = parseFloat(aNewArray[0]) % parseFloat(aNewArray[1]);
            oResult.innerText = sum;
        }
        
         
         
    }

}