// 获得body高度
setTimeout(function() {
    document.getElementById('content').style.height = window.innerHeight + 'px';
}, 20);

// 获得列表
var table = document.getElementById("list");
// 新建数组列表
function all_order() {
    $(function() {
        var shopId = 1;
        // 获得个人订单信息
            $.get(baseUrl + "/orders/shop/" + shopId, function(result) {
            result.resultParm.orderList.forEach((list) => {
                     console.log(list);
            });
        });
    });
}

// var i = 0;
// var j = 0;
// var table_title = document.getElementById("title");
// table_title.innerHTML = "订单总汇";
// // 将名称、单价等写进表格中
// var list = [
//     ["名称", "单价(元)", "数量(份)", "总价(元)", "下单时间"]
// ]
// for (j = 0; j < 5; j++) {
//     var td0 = table.rows[0].cells[j]; //获得table第一行
//     td0.innerHTML = list[0][j];
// }

// //新建数组写入商品数据 
// var list = new Array();
// for (i = 1; i < 9; i++) {
//     list[i] = new Array();
//     for (j = 0; j < 5; j++) {
//         var td = table.rows[i].cells[j]; //获得table的行列
//         list[i][j] = i + j;
//         td.innerHTML = list[i][j];
//     }
// }


// // 待评价订单
// function open_order() {
//     var i = 0;
//     var j = 0;
//     var table_title = document.getElementById("title");
//     table_title.innerHTML = "待评价订单";
//     // 将时间订单信息写入表头
//     var list = [
//         ["时间", "订单", "金额", "状态", "操作"]
//     ]
//     for (j = 0; j < 5; j++) {
//         var td0 = table.rows[0].cells[j]; //获得table第一行
//         td0.innerHTML = list[0][j];
//     }
//     var list = new Array();
//     for (i = 1; i < 9; i++) {
//         list[i] = new Array();
//         for (j = 0; j < 5; j++) {
//             var td = table.rows[i].cells[j]; //获得table的行列
//             list[i][j] = i + j;
//             td.innerHTML = list[i][j];
//         }
//         var a = document.getElementsByClassName("delete-btn");

//         for (var i = 0; i < 4; i++) {
//             a[i].innerHTML = "评价";
//         }
//     }
// }
// // 退单记录
// function refund_order() {
//     create_array();
// }
