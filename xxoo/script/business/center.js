// 获得列表
var table = document.getElementById("list");
// 新建数组列表

function genOrderHeader(){
	 var list =["名称", "单价(元)", "数量(份)", "总价(元)", "下单时间"];
	
	var formhead = $("<tr class='active'></tr");
	list.forEach((ele)=>{
		console.log(ele);
		formhead.append("<td>"+ele+"</td>");
	});
	
	$("tbody").append(formhead);
}

function create_array(orderList) {
    var i = 0;
    var j = 0;
    var table_title = $("#title1");
    table_title.innerHTML = "订单总汇";
   

    var list = new Array();
    for (i = 1; i < orderList.lenth; i++) {
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
// 店铺订单
function all_order() {
	 var shopUserId = 1;

	 $("tr").remove();
	 
	 //修改表标题
	 var table_title = $("#title1");
	 table_title.innerHTML = "订单总汇";
	 
	 //生成form表头
	 genOrderHeader();
	 
	 $.get(baseUrl + "/orders/shop/"+ shopUserId, function(result){
		
		result.resultParm.orderList.forEach((orders)=>{
			
			console.log(orders);
			
			var formcontent = $("<tr class='active'></tr");
			
			formcontent.append("<td>" + '' + "</td>"); //商品名称
			formcontent.append("<td>" + '' + "</td>"); //单价
			formcontent.append("<td>" + '' + "</td>"); //数量
			formcontent.append("<td>" + orders.totalPrice + "</td>"); //订单总价
			formcontent.append("<td>" + new Date(orders.createdDate).Format("yyyy-M-d") + "</td>"); //下单时间
	
			$("tbody").append(formcontent);
			
		});
		//result.resultParm.orderList.forEach((orders)=>{
		//	console.log(orders);
			//$("#classification").append('<li role="presentation"><a href="#">'+classification.name+'</a></li>');
		//});
	});
}

// 未接订单
function open_order() {
    create_array();

}
// 退款定单
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

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  
