$(function() {
    var a;
    // 获取验证码
    $.get(baseUrl + "/verifycode/{phoneNumber}", (result) => {
        console.log(result);
        localStorage.setItem("yanzhengma", result.resultInfo);
        $("#yanzhengma").text(localStorage.getItem("yanzhengma"));
    });

    $("#huoqu").on("click", () => {
        $.get(baseUrl + "/verifycode/{phoneNumber}", (result) => {
            console.log(result);
            localStorage.setItem("yanzhengma", result.resultInfo);
            $("#yanzhengma").text(localStorage.getItem("yanzhengma"));
            if (userVeriFycode != result.resultInfo) {
                alert("验证码不正确");
            }
        });
    });
    $("#register").on("click", () => {
        var userPhone = $("#phone").val();
        var userPassword = $("#password").val();
        var userVeriFycode = $("#verifycode").val();
        console.log(userPhone);
        console.log(userPassword);
        console.log(userVeriFycode);
        // 判断是否用户已经注册
        $.get(baseUrl + "/users/all", (result) => {
            console.log(result);
            if (null != result.resultParm.user) {
                alert("用户已注册");
            } else {
                // console.log(userPhone);
                // console.log(userPassword);
                // console.log(userVeriFycode);

                // 注册成功
                $.post(baseUrl + "/users/register", {
                        "account": userPhone,
                        "password": userPassword,
                        "verifycode": userVeriFycode
                    },
                    function(result) {
                        console.log(result);
                        alert("注册成功");
                    });
            }

        });

    });
});
