﻿

$(function(){	
     //获得商家
	 var goodsList = eval(localStorage.getItem("goodsList"));
	 var i=1;
	 var total = 0;
	 goodsList.forEach((goods)=>{
	 	console.log(goods);
	 	console.log(total);
	 	console.log(goods.number);
	 	total = total + goods.number * goods.price;
	 	console.log(total);
	 	$("div.items").append('<div class="item1"><div id="close'+i+'" class="close'+i+'"><!--Remove-Item--><div class="alert-close1" onClick="deleteDom('+i+')"></div><!--Remove-Item--><div class="image1"><img src="images/item1.png "alt="item'+i+'"></div><div class="title1"><p>'+goods.name+'</p></div><div class="quantity1"><form action="action_page.php"><input type="number"name="quantity"min="1"max="100"value="'+goods.number+'"></form></div><div class="price1"><p>￥'+goods.price+'</p></div><div class="clear"></div></div></div>');
		i++;
	});

	 $(".total2").text("￥"+total);

	 $("#confirm").on("click",()=>{

	 	var goodsList = eval(localStorage.getItem("goodsList"));
	 	var param = {};
	 	param.addressId = 1;
	 	param.totalPrice = 100;
	 	param.userId = localStorage.getItem("userId");
	 	param.shopUserId = localStorage.getItem("shopId");
	 	param.payType = $("form").serialize().split('&')[1].split('=')[1];;
	 	param.goodsList = JSON.stringify(goodsList);
	 	$.post( baseUrl + "/orders/placeOrder",param,(result)=>{
	 	console.log(result);
	 	localStorage.removeItem("goodsList");
	 	localStorage.setItem("goodsList",[]);
		if(result.resultParm.ordersId != null){
			window.location.href="/zhifuyemian/index.html?ordersId="+result.resultParm.ordersId;
		}else{
			alert(result.resultInfo);
		}
	 	});
	 });
});

function deleteDom(i){
	$('#close'+i).fadeOut('slow',()=>{
		var goodsList = eval(localStorage.getItem("goodsList"));
		goodsList.splice(i-1,1);
		localStorage.setItem("goodsList",JSON.stringify(goodsList));
		// countPrice(goodsList);
		// $('.close'+i).remove();
		window.location.href="/shoppingcar.html";
	});
}

function countPrice(goodsList){
	var total = 0;
	goodsList.forEach((goods)=>{
		total = total + goods.number*goods.price;
	});
	$(".total2").text("￥"+total);
}