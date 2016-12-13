/**
 * Created by lovedrose on 12/13/16.
 */

$(function () {
    console.log("load html..")
    // 修改订单支付状态
    var orderId = getParam("orderId")
    console.log("orderId", orderId)
    var reqUrl = baseUrl + '/orders/callBackPay'
    var param = {
        "orderId" : orderId
    }

    $.post(reqUrl, param, function (data) {
        console.log('/orders/callBackPay', data)
        if(data.messageCode == 200) {
            console.log("success")
            countDown(5, "http://localhost:8080/user/index.html")
        }
    });
});