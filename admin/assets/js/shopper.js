$(function(){
	//获得所有商家信息
  $.get(baseUrl + "/shopper/all/", function(result){

         console.log($($("tbody")[0]));

         console.log(result);

         result.resultParm.shopperList.forEach((shopper)=>{
             console.log(shopper);
             	var tmpbutton;
             if(shopper.status ==0 ){
				tmpbutton = "<button id='throughAudit' onclick='btnChange()'>通过审核</button>";
             }else if (shopper.status == 1) {
             	tmpbutton = "<button id='frozenAccount' onclick='btnChange()'>冻结用户</button>";
             }else{
             	tmpbutton = "<button id='frozenAccount' onclick='btnChange()'>重新申请</button>";
             }
             
             $($("tbody")[0]).append($('<tr><td class="center"><label><input type="checkbox"class="ace"/><span class="lbl"></span></label></td><td><a href="#">'+shopper.name+'</a></td><td>'+shopper.address+'</td><td class="hidden-480">'+shopper.introduction+'</td><td>'+new Date(shopper.lastModifiedDate).Format("yyyy-MM-dd")+'</td><td class="hidden-480"><span class="label label-sm label-warning">Expiring</span></td><td><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons"><a class="blue"href="#"><i class="icon-zoom-in bigger-130"></i></a><a class="green"href="#"><i class="icon-pencil bigger-130"></i></a><a class="red"href="#"><i class="icon-trash bigger-130"></i></a></div><a class="red" href="#">'+tmpbutton+'</a><div class="visible-xs visible-sm hidden-md hidden-lg"><div class="inline position-relative"><button class="btn btn-minier btn-yellow dropdown-toggle"data-toggle="dropdown"><i class="icon-caret-down icon-only bigger-120"></i></button><ul class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close"><li><a href="#"class="tooltip-info"data-rel="tooltip"title="View"><span class="blue"><i class="icon-zoom-in bigger-120"></i></span></a></li><li><a href="#"class="tooltip-success"data-rel="tooltip"title="Edit"><span class="green"><i class="icon-edit bigger-120"></i></span></a></li><li><a href="#"class="tooltip-error"data-rel="tooltip"title="Delete"><span class="red"><i class="icon-trash bigger-120"></i></span></a></li><li><a href="#"class="tooltip-success"data-rel="tooltip"title="Edit"><span class="blue">'+tmpbutton+'</span></a></li></ul></div></div></td></tr>'));
        });
    });
});

function btnThroughAudit(shopperStatus){
	shopper.status=1;
	$("#btnId").val("冻结用户");
	alert("该账户已通过审核");
}

function btnTrozenAccount(shopperStatus){
	shopper.status=0;
	$("#btnId").val("通过审核");
	alert("该账户已冻结");
}

function btnFailed(shopperStatus){
	shopper.status=0;
	$("#btnId").val("通过审核");
	alert("该账户未通过审核");
}

function btnChange(shopperStatus){

	判断status的值，根据值的不同变成不同值
     $.post(baseUrl+"接口"+shopperStatus,(result)=>{


      console.log(result);
      window.location.href="/shopper/unaccept.html";
    });
}