
$(function(){
	//获得商家下的商品
	 $.get(baseUrl + "/goods/shop/1", function(result){
		 var block;
		 var count = 0;
		result.resultParm.goodsList.forEach((goods)=>{
			console.log(goods);
			
			if(count%4 == 0){
				block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
				$($(".container")[1]).append(block);
				//block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
			}
			block.append('<div class="col-md-3 offer-left"><a href="goods.html"><img src="images/o-5.jpg" alt=""/></a><h4><a href="goods.html">'+goods.name+'</a></h4><p><h3>￥'+goods.price+'</h3></p><div class="o-btn"><a href="goods.html">购买</a></div></div>');
			if(count%4 ==3){
				block.append('<div class="clearfix"> </div>');
			}
			count ++;
		});
	});
});