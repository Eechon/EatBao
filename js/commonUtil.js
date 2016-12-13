/**
 * Created by lovedrose on 12/13/16.
 */
/**
 * 获取url参数
 * @param paramName
 * @returns {string}
 */
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}


/**
 * 校验请求参数
 * @param goodsDefNumber
 * @param goodsNumber
 * @param goodsPrice
 */
function verifyNumParam(value, identifier) {
    console.log("verifyParam", value , identifier)
    if (value == null || value == "") {
        $("#"+identifier).text("不能为空")
    } else if (isNaN(value)) {
        $("#"+identifier).text("请输入有效数字")
    } else if (value < 0) {
        $("#"+identifier).text("不能小于0")
    } else {
        $("#"+identifier).text("")
    }
}

/**
 * n秒后自动跳转到某url
 * @param secs
 * @param surl
 */
function countDown(secs,surl){
    //alert(surl);
    var jumpTo = document.getElementById('jumpTo');
    jumpTo.innerHTML=secs;
    if(--secs>0){
        setTimeout("countDown("+secs+",'"+surl+"')",1000);
    }
    else{
        location.href=surl;
    }
}