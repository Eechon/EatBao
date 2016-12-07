

$(function(){	
     //获得商家
	 var goodsList = eval(localStorage.getItem("goodsList"));
	 var i=1;
	 goodsList.forEach((goods)=>{
	 	console.log(goods);
	 	$("div.items").append('<div class="item'+i+'"><div class="close'+i+'"><!--Remove-Item--><div class="alert-close'+i+'" onClick="deleteDom('+i+')"></div><!--Remove-Item--><div class="image'+i+'"><img src="images/item1.png "alt="item'+i+'"></div><div class="title'+i+'"><p>'+goods.name+'</p></div><div class="quantity'+i+'"><form action="action_page.php"><input type="number"name="quantity"min="1"max="100"value="'+goods.number+'"></form></div><div class="price1"><p>￥'+goods.price+'</p></div><div class="clear"></div></div></div>');
		i++;
	});
});

function deleteDom(i){
	$('.close'+i).fadeOut('slow',()=>{
		var goodsList = eval(localStorage.getItem("goodsList"));
		goodsList.splice(i-1,1);
		localStorage.setItem("goodsList",JSON.stringify(goodsList));
		$('.close'+i).remove();
	});
}