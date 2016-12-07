

$(function(){	
     //获得商家
	 $.get(baseUrl + "/shop/all", (result)=>{
		 var block;
		 var count = 0;
		result.resultParm.shopList.forEach((shop)=>{
			console.log(shop);
			
			if(count%4 == 0){
				block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
				$($(".container")[1]).append(block);
				//block = $("<div class='offer-bottom' style='margin-bottom:30px' ></div>");
			}
			block.append('<div class="col-md-3 offer-left"><a href="goods.html?shopId='+shop.id+'"><img src="images/o-5.jpg" alt=""/><h6>'+shop.shopName+'</h6></a><h4><a href="goods.html?shopId='+shop.id+'">'+shop.shopName+'</a></h4><div class="o-btn"><a href="goods.html?shopId='+shop.id+'">进入商家</a></div></div>');
			if(count%4 ==3){
				block.append('<div class="clearfix"> </div>');
			}
			count ++;
		});
	});
});