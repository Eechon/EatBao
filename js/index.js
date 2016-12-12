

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
	 //商家认证申请相关监听器
	 registerBusinessListener();
});

/**
 * 商家认证申请相关监听器
 */
function registerBusinessListener() {

        //获取短信验证码按钮监听器
        $("#getCheckCode").on("click",() => {
            $("#getCheckCode").attr({"disabled":"disabled"});

            var contact = $("#contact").val();

            if(contact == "") {
                alert("手机号码不能为空！");
                $("#getCheckCode").removeAttr("disabled");
                return false;
            }

            if (!contact.match(/^1[34578]\d{9}$/)) {
                alert("手机号码格式不正确！");
                $("#getCheckCode").removeAttr("disabled");
                return false;
            }

            $.post(baseUrl + "/verifycode/getCode",{"contact":contact},(result)=>{
                if(result.serviceResult) {
                    alert("短信验证码发送成功！");
                } else {
                    alert("短信验证码发送失败！");
                }

                $("#getCheckCode").removeAttr("disabled");
            });
        });

        //商家认证按钮监听器
        $('#registerBusinessForm').submit(function() {

            $("#registerBusinessBtn").attr({"disabled":"disabled"});
            //表单校验
            if(!validataRegisterBusinessForm()) {
                $("#registerBusinessBtn").removeAttr("disabled");
                return false;
            }

            var userId = null;
            //获取用户Id
            userId = localStorage.getItem("userId");

            if(userId == null || userId == "") {
                alert("用户Id不能为空");
                $("#registerBusinessBtn").removeAttr("disabled");
                return false;
            } else {
                $("#userId").val(userId);
            }

            var options = {
                url:baseUrl + "/shopper/add",
                success: dealUploadResponse,
                resetForm: true,
                dataType:  'json'
            };

            $(this).ajaxSubmit(options);
            return false;//防止刷新
        });
}

/**
 * 表单验证
 * @returns {boolean}
 */
function validataRegisterBusinessForm() {
    //数据完整性判定
    if($("#introduction").val() == "") {
        alert("商家认证说明不能为空！");
        return false;
    }
    if($("#name").val() == "") {
        alert("真实姓名不能为空！");
        return false;
    }
    var contact = $("#contact").val();
    if(contact == "") {
        alert("手机号码不能为空！");
        return false;
    }
    if (!contact.match(/^1[34578]\d{9}$/)) {
        alert("手机号码格式不正确！");
        return false;
    }
    if($("#checkCode").val() == "") {
        alert("验证码不能为空！");
        return false;
    }
    if($("#address").val() == "") {
        alert("商家地址不为空！");
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

    return true;
}

/**
 * 商家认证回调函数
 * @param responseText
 * @param statusText
 * @param xhr
 * @param $form
 */
function dealUploadResponse(responseText, statusText, xhr, $form) {

	if(statusText == "success") {
		if(responseText.serviceResult == true) {
            $('#modal').modal('hide');
			alert("商家认证提交成功！");
		} else {
			alert("商家认证提交失败！");
		}
        $("#registerBusinessBtn").removeAttr("disabled");
	}
}

/**
 * 根据是否为商家修改导航条及对应的监听事件
 */
function changeNavByIsBusiness() {

    //存在用户Id
    $("#businessRegister").text("商家申请");
    $("#businessRegister").on("click",()=>{
        //展示商家认证的蒙层
        $('#modal').modal('show');
        return false;
    });

	var userId = null;

	//获取用户Id
	userId = localStorage.getItem("userId");

	if(userId != null || userId != "") {
		//存在用户Id
        //判断是否为商家
        $.get(baseUrl + "/shopper/isshopper/" + userId,(result)=>{
            if(result.serviceResult == true) {
                $("#businessRegister").unbind();
                $("#businessRegister").text("我的店铺");
                $("#businessRegister").on("click",()=>{
                    return true;
                });
            }
        });
	}
}

