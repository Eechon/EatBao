$(function(){
	//获取未审核商品
  $.get(baseUrl + "/goods/waitcheck/", function(result){

         console.log($($("tbody")[0]));

         console.log(result);

         result.resultParm.goodsList.forEach((goods)=>{
             console.log(goods);
             $($("tbody")[0]).append($('<tr><td class="center"><label><input type="checkbox"class="ace"/><span class="lbl"></span></label></td><td><a href="#">'+shopper.name+'</a></td><td>'+shopper.address+'</td><td class="hidden-480">'+shopper.introduction+'</td><td>'+new Date(shopper.lastModifiedDate).Format("yyyy-MM-dd")+'</td><td class="hidden-480"><span class="label label-sm label-warning">Expiring</span></td><td><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons"><a class="blue"href="#"><i class="icon-zoom-in bigger-130"></i></a><a class="green"href="#"><i class="icon-pencil bigger-130"></i></a><a class="red"href="#"><i class="icon-trash bigger-130"></i></a></div><div class="visible-xs visible-sm hidden-md hidden-lg"><div class="inline position-relative"><button class="btn btn-minier btn-yellow dropdown-toggle"data-toggle="dropdown"><i class="icon-caret-down icon-only bigger-120"></i></button><ul class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close"><li><a href="#"class="tooltip-info"data-rel="tooltip"title="View"><span class="blue"><i class="icon-zoom-in bigger-120"></i></span></a></li><li><a href="#"class="tooltip-success"data-rel="tooltip"title="Edit"><span class="green"><i class="icon-edit bigger-120"></i></span></a></li><li><a href="#"class="tooltip-error"data-rel="tooltip"title="Delete"><span class="red"><i class="icon-trash bigger-120"></i></span></a></li></ul></div></div></td></tr>'));
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