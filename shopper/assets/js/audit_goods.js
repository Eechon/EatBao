$(function(){
	//获取未审核商品
  $.get(baseUrl + "/goods/waitcheck/", function(result){

         console.log($($("tbody")[0]));

         console.log(result);

         result.resultParm.goodsList.forEach((goods)=>{
             console.log(goods);
             $($("tbody")[0]).append($('<tr><td class="center"><label><input type="checkbox"class="ace"><span class="lbl"></span></label></td><td><a href="#">'+goods.name+'</a></td><td>￥'+goods.price+'</td><td class="hidden-480">'+goods.introduce+'</td><td>'+goods.number+'</td><td>'+new Date(goods.lastModifiedDate).Format("yyyy-MM-dd")+'</td><td class="hidden-480">'+statusToText(goods.status)+'</td></tr>'));
        });
    });
});
function statusToText(status){
    if(status == 1){
        //--label-warning   --label-inverse arrowed-in
        return '<span class="label label-sm label-success">商家上架</span>';
    }else if(status ==2){
        return '<span class="label label-sm label-warning">商家下架</span>';
    }else if(status ==3){
        return '<span class="label label-sm label-inverse arrowed-in">管理员下架</span>';

    }else return '<span class="label label-sm label-warning">非法状态'+status+'</span>';
}