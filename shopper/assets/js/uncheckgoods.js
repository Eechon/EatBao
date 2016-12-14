
$(function() {
    var shopId = localStorage.getItem("userId")
    console.log("shopId", shopId)

    if(shopId == null || shopId == '') {
        window.location.href = 'http://localhost:8080/login.html'
    }

    $("#shopId").val(shopId)
    //获得所有商家信息
    $.get(baseUrl + "/goods/shop/waitcheck/" + shopId, function(result) {

        console.log($($("tbody")[0]));

        console.log(result);

        result.resultParm.goodsList.forEach((goods) => {
            console.log(goods);
            $($("tbody")[0]).append($('<tr><td class="center"><label><input type="checkbox"class="ace"><span class="lbl"></span></label></td><td><a href="#">' + goods.name + '</a></td><td>￥' + goods.price + '</td><td class="hidden-480">' + goods.introduce + '</td><td>' + new Date(goods.lastModifiedDate).Format("yyyy-MM-dd") + '</td><td class="hidden-480"><span class="label label-sm label-success">'+statusToText(goods.status)+'</span></td></tr>'));
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