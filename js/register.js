$(function() {
    // 获取验证码

    $("#huoqu").on("click", () => {
    $.get(baseUrl + "/verifycode/code/"+$("#phone").val(), (result) => {
            console.log(result);
            localStorage.setItem("yanzhengma", result.resultInfo);
            $("#yanzhengma").text(localStorage.getItem("yanzhengma"));
        });
    });
    $("#register").on("click", () => {
        var userPhone = $("#phone").val();
        var userPassword = $("#password").val();
        var userVeriFycode = $("#verifycode").val();
        console.log(userPhone);
        console.log(userPassword);
        console.log(userVeriFycode);

        if(userPhone == "") {
            alert("用户名不为空！");
            return false;
        }
        if(userPassword == "") {
            alert("用户密码不为空！");
            return false;
        }
        if(userVeriFycode == "") {
            alert("验证码不为空");
            return false;
        }
        if(!$("#license").prop("checked")) {
            alert("请先同意吃货宝协议！");
            return false;
        }

        // 判断是否用户已经注册
        // 注册成功
        $.post(baseUrl + "/users/register", {
                "account": userPhone,
                "password": userPassword,
                "verifycode": userVeriFycode
            },
            function(result) {
                if(result.serviceResult) {
                    alert("注册成功");
                    window.location.href="/login.html";
                
                } else {
                    alert(result.resultInfo);
                    $("#phone").val("");
                    $("#password").val("");
                    $("#verifycode").val("");

                }
            });
        });
});
