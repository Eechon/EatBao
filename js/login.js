$(function(){
	$("#login").on("click",()=>{
		//13570956669
		$.post(baseUrl+"/users/doLogin",{"account":$("#phone").val(),"password":$("#password").val()},(result)=>{
			console.log(result);
			if(null != result.resultParm.user){
				window.location.href="/index.html";
			}else{
				alert("登录失败");
			}
		});
	});
});