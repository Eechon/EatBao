﻿
$(function(){
	//获得商家下的商品
	 $.get(baseUrl + "/goods/shop/1", function(result){
		 var block;
		 var count = 0;
		result.resultParm.goodsList.forEach((goods)=>{
			
			if(count%4 == 0){
				block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
				$($(".container")[1]).append(block);
				//block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
			}
			block.append('<div class="col-md-3 offer-left"><a href="goods.html"><img src="images/o-5.jpg" alt=""/></a><h4><a href="goods.html">'+goods.name+'</a></h4><p><h3>￥'+goods.price+'</h3></p><div class="o-btn"><a id="buy" data-toggle="modal" data-target="#modal" onclick="showText('+'\''+goods.name+'\''+','+goods.id+')">购买</a></div></div>');
			if(count%4 ==3){
				block.append('<div class="clearfix"> </div>');
			}
			count ++;
		});
	});


	 $("#confirm").on("click",()=>{
	 	console.log("xxoo");
		var goods = {};
	 	goods.id = $("#goodsId").val();
	 	goods.number = $('#goodsNumber').val();
		
		console.log(goods);
	 	var goodsList = eval(localStorage.getItem("goodsList"));
	 	
		if(goodsList == null){
	 		goodsList = [];
	 	}

	 	//TODO 数组去除重复
	 	// goodsList.forEach((tmpgoods)=>{
	 	// 	console.log(goods);
	 	// 	if(tmpgoods.id ==goods.id){

	 	// 	}
	 	// });

	 	console.log(JSON.stringify(goodsList));
	 	goodsList.push(goods);
		
	 	localStorage.removeItem("goodsList");
	 	console.log(JSON.stringify(goodsList));
	 	localStorage.setItem("goodsList",JSON.stringify(goodsList));

		$('#goodsNumber').val(0);
	 	$("#modal").modal("hide");
	 });

});

function showText(name,id){
	console.log("clicking me");
	console.log(id);
	$('#goodsName').text(name);
	$("#goodsId").val(id);
}