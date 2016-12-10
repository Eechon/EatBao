$(function(){
	$("#login").on("click",()=>{
		//13570956669
		$.post(baseUrl+"/users/doLogin",{"account":$("#phone").val(),"password":$("#password").val()},(result)=>{
			console.log(result);
			var user = result.resultParm.user;
			if(null != result.resultParm.user){
				localStorage.removeItem("userId");
				localStorage.setItem("userId",user.id);
				window.location.href="/index.html";
			}else{
				alert("登录失败");
			}
		});
	});
});