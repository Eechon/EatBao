$(function(){
	//获得所有商家信息
  var shopperId = localStorage.getItem("userId");
  $.get(baseUrl + "/shop/getShop/"+shopperId, function(result){
  
		var shop = result.resultParm.shop;
		console.log(shop);
		$("#shopName").val(shop.shopName);
		$("#openTime").val(shop.openTime.replace('-',':'));
		$("#stopTime").val(shop.stopTime.replace('-',':'));
		$("#distributionFee").val(shop.distributionFee);
		$("#startingPrice").val(shop.startingPrice);
		$("#license").val(shop.license);
		$("#shopImg").attr("src",baseUrl + shop.shopImg);
		if(shop.status == 2){
		$("#online").attr("checked",true);
		}else{
		$("#online").attr("checked",false);
		}
		
		$("#shopId").val(shopperId);
		$("#shopName2").val(shop.shopName);
		$("#openTime2").val(shop.openTime.replace('-',':'));
		$("#stopTime2").val(shop.stopTime.replace('-',':'));
		$("#distributionFee2").val(shop.distributionFee);
		$("#startingPrice2").val(shop.startingPrice);
		$("#license2").val(shop.license);
		
		if(shop.status == 2){
		$("#online2").attr("checked",true);
		}else{
		$("#online2").attr("checked",false);
		}
		
         console.log(result);
		 
    });
	registerBusinessListener();
});

/**
 * 商家认证申请相关监听器
 */
function registerBusinessListener() {
	
	$("#mysub").on("click",()=>{
		console.log("xxoo1");
		$("#online2").attr("checked");
        //商家认证按钮监听器
var formData = new FormData();
var status ;
if($("#online2").get(0).checked){
	status = 2;
}else {
	status = 1;
}

formData.append("id",$("#shopId").val());
formData.append("shopName",$("#shopName2").val());
formData.append("openTime",$("#openTime2").val().replace(':','-'));
formData.append("stopTime",$("#stopTime2").val().replace(':','-'));
formData.append("distributionFee", $("#distributionFee2").val());
formData.append("startingPrice",$("#startingPrice2").val());
formData.append("license",$("#license2").val());
formData.append("status",status);
formData.append("file",$("#shopImg2")[0].files[0]);

$.ajax({ 
url : baseUrl + "/shop/add", 
type : 'POST', 
data : formData, 
// 告诉jQuery不要去处理发送的数据
processData : false, 
// 告诉jQuery不要去设置Content-Type请求头
contentType : false,
beforeSend:function(){
console.log("正在进行，请稍候");
},
success : function(responseStr) { 
console.log(responseStr);
if(responseStr.status===0){
console.log("成功"+responseStr);
}else{
console.log("失败");
}
}, 
error : function(responseStr) { 
console.log("error");
} 
});
	});
	
}

/**
 * 商家认证回调函数
 * @param responseText
 * @param statusText
 * @param xhr
 * @param $form
 */
function dealUploadResponse(responseText, statusText, xhr, $form) {
	alert("xxoo")
	if(statusText == "success") {
		if(responseText.serviceResult == true) {
            $('#modal').modal('hide');
            //认证成功修改认证按钮
            //changeNavByIsBusiness();
			alert("商家认证提交成功！");
		} else {
			alert("商家认证提交失败！");
		}
        $("#mysub").removeAttr("disabled");
	}
}
