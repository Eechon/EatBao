

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

	 //根据是否为商家修改导航条
	 changeNavByIsBusiness();
	 //商家认证申请
	 registerBusinessListener();
});

//商家认证申请相关监听器
function registerBusinessListener() {

        $('#registerBusinessForm').submit(function() {
            //数据完整性判定
            if($("#desc").val() == "") {
                alert("商家认证说明不能为空！");
                return false;
            }
            if($("#frontImg").val() == "") {
                alert("身份证正面照不能为空！");
                return false;
            }
            if($("#backImg").val() == "") {
                alert("身份证反面照不能为空！");
                return false;
            }

            var userId = null;
            //获取用户Id
            userId = localStorage.getItem("userId");

            //模拟用户Id
            //实际环境屏蔽用户Id
            //userId=123456;
            if(userId == null || userId == "") {
                alert("用户Id不能为空");
                return false;
            } else {
                $("#userId").val(userId);
            }

            var options = {
                url:baseUrl + "/businessApply/add",
                success: dealUploadResponse,
                resetForm: true,
                dataType:  'json'
            };

            $(this).ajaxSubmit(options);
            return false;//防止刷新
        });
}

//商家认证回调函数
function dealUploadResponse(responseText, statusText, xhr, $form) {

	if(statusText == "success") {
		if(responseText.serviceResult == true) {
            $('#modal').modal('hide');
			alert("商家认证提交成功！");
		} else {
			alert("商家认证提交失败！");
		}
	}
}

//根据是否为商家修改导航条及对应的监听事件
function changeNavByIsBusiness() {

	var userId = null;

	//获取用户Id
	userId = localStorage.getItem("userId");


	if(userId == null || userId == "") {
    	//存在用户Id
        $("#businessRegister").text("商家申请");
        $("#businessRegister").on("click",()=>{
            //展示商家认证的蒙层
            $('#modal').modal('show');
            return false;
        });
		return;
	} else {
		//不存在用户Id
        //判断是否为商家
        $.get(baseUrl + "/shopper/isshopper/" + userId,(result)=>{
            if(result.resultParm.status == true) {
                $("#businessRegister").text("我的店铺");
                $("#businessRegister").on("click",()=>{
                    return true;
                });
            } else {
                $("#businessRegister").text("商家申请");
                $("#businessRegister").on("click",()=>{
                    //展示商家认证的蒙层
                    $('#modal').modal('show');
                    return false;
                });
            }
        });
	}
}

