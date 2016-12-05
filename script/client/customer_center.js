// 获得列表
var table = document.getElementById("list");
// 新建数组列表
function create_array() {
    var i = 0;
    var j = 0;
    var table_title = document.getElementById("title1");
    table_title.innerHTML = "订单总汇";
    var list = [
        ["名称", "单价(元)", "数量(份)", "总价(元)", "下单时间"]
    ]
    for (j = 0; j < 5; j++) {
        var td0 = table.rows[0].cells[j]; //获得table第一行
        td0.innerHTML = list[0][j];
    }



    var list = new Array();
    for (i = 1; i < 9; i++) {
        list[i] = new Array();
        for (j = 0; j < 5; j++) {
            var td = table.rows[i].cells[j]; //获得table的行列
            list[i][j] = i + j;
            td.innerHTML = list[i][j];
        }

    }
}
setTimeout(function() {
    document.getElementById('content').style.height = window.innerHeight + 'px';
}, 20);

function tiaozhuan() {
    var s = document.getElementById("danjia");
    s.innerHTML = "200";
}

// 未接订单
function open_order() {
    var table_title = document.getElementById("title1");
    table_title.innerHTML = "待评价订单";

    var i = 0;
    var j = 0;

    var list = [
        ["时间", "订单", "金额", "状态", "操作"]
    ]
    for (j = 0; j < 5; j++) {
        var td0 = table.rows[0].cells[j]; //获得table第一行
        td0.innerHTML = list[0][j];
    }
    var list = new Array();
    for (i = 1; i < 9; i++) {
        list[i] = new Array();
        for (j = 0; j < 5; j++) {
            var td = table.rows[i].cells[j]; //获得table的行列
            list[i][j] = i + j;
            td.innerHTML = list[i][j];
        }
        var a = document.getElementsByClassName("btn1");

        for (var i = 0; i < 4; i++) {
            a[i].innerHTML = "评价";
        }
    }
}
// 退单记录
function refund_order() {
    create_array();

}
// 完成订单
function complete_order() {
    create_array();

}
// 商家商品
function goods() {
    var table_title = document.getElementById("title1");
    table_title.innerHTML = "商家商品";

    var i = 0;
    var j = 0;

    var list = [
        ["名称", "类型", "单价", "库存", "操作"]
    ]
    for (j = 0; j < 5; j++) {
        var td0 = table.rows[0].cells[j]; //获得table第一行
        td0.innerHTML = list[0][j];
    }
}
