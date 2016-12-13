var pingpp = require('pingpp-js');

/**
 * 获取订单详情
 */
function getOrderInfo() {
    // 获取订单信息
    var orderId = getParam("ordersId");
    // var orderId = 4;
    var reqUrl = baseUrl + '/orders/ordersInfo/' + orderId
    $.get(reqUrl, function (data) {
        console.log("ordersInfo", data)
        var items = data.resultParm.orderDetailList
        var order = data.resultParm.order

        $("#orderId").text(order.id)
        $("#orderTotalPrice").text(order.totalPrice)
        $("#orderCreateTime").text(new Date(order.createdDate).Format("yyyy-MM-dd"))
        $("#orderAddress").text(order.address)
        $("#orderContact").text(order.name)
        $("#orderPhone").text(order.phone)

        // 商品
        items.forEach(function (good) {
            console.log("item",good);
            $($("tbody")[0]).append($('<tr>' +
                '<td class="col-md-4">' + good.goodName + '</td>' +
                '<td class="col-md-2">' + good.price + '</td>' +
                '<td class="col-md-3">' + good.number + '</td>' +
                '<td class="col-md-3">' + good.totalPrice + '</td>' +
                '</tr>'));
        })
    });
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