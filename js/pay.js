var pingpp = require('pingpp-js');

$(function(){
	var ordersId = getParam("ordersId");
	$("#pay").onclick(function () {
        // $.post(baseUrl+"/orders/pay/"+ordersId,(result)=>{
        //     console.log(result);
        // window.location.href="/index.html";

        console.log('pay!!!')
    });
});

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

function payOrder() {
    console.log("payOrder")
    var orderId = getParam("ordersId");
    // var orderId = 4
    $.post(baseUrl + '/orders/pay',
        {
            "ordersId" : orderId,
            "payWay" : "alipay_pc_direct",
            "client_ip" : "127.0.0.1"
        },
        function (data) {
            console.log(data.resultParm.charge)
            pingpp.createPayment(data.resultParm.charge, function(result, err){
                console.log("result", result);
                console.log("err.msg", err.msg);
                console.log("err.extra", err.extra);
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                    console.log("success:" + result)
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                } else if (result == "cancel") {
                    // 微信公众账号支付取消支付
                }
            });
        }
    );
}