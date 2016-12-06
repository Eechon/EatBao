$(function() {
    // 获得商品分类导航栏
    $.get(baseUrl + "/classification/all", function(result) {
        result.resultParm.classificationList.forEach((classification) => {
            console.log(classification);
            $("#classification").append('<li role="presentation"><a href="#">' + classification.name + '</a></li>');
        });
    });
});
