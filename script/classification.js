
$(function(){
	 $.get("http://localhost:9001/classification/all", function(result){
		
		result.resultParm.classificationList.forEach((classification)=>{
			console.log(classification);
			$("#classification").append('<li role="presentation"><a href="#">'+classification.name+'</a></li>');
		});
	});
});