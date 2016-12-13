
$(function() {
    var shopperId = 2;
    //获得所有商家信息
    $.get(baseUrl + "/goods/shop/" + shopperId, function(result) {

        console.log($($("tbody")[0]));

        console.log(result);

        result.resultParm.goodsList.forEach((goods) => {
            console.log(goods);
            $($("tbody")[0]).append($('<tr><td class="center"><label><input type="checkbox"class="ace"><span class="lbl"></span></label></td><td><a href="#">' + goods.name + '</a></td><td>￥' + goods.price + '</td><td class="hidden-480">' + goods.introduce + '</td><td>' + new Date(goods.lastModifiedDate).Format("yyyy-MM-dd") + '</td><td class="hidden-480"><span class="label label-sm label-success">Registered</span></td><td><div class="visible-md visible-lg hidden-sm hidden-xs btn-group"><button class="btn btn-xs btn-info"><i class="icon-edit bigger-120"></i></button><button class="btn btn-xs btn-danger"><i class="icon-trash bigger-120"></i></button><button class="btn btn-xs btn-warning"><i class="icon-flag bigger-120"></i></button></div><div class="visible-xs visible-sm hidden-md hidden-lg"><div class="inline position-relative"><button class="btn btn-minier btn-primary dropdown-toggle"data-toggle="dropdown"><i class="icon-cog icon-only bigger-110"></i></button><ul class="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close"><li><a href="#"class="tooltip-info"data-rel="tooltip"title="View"><span class="blue"><i class="icon-zoom-in bigger-120"></i></span></a></li><li><a href="#"class="tooltip-success"data-rel="tooltip"title="Edit"><span class="green"><i class="icon-edit bigger-120"></i></span></a></li><li><a href="#"class="tooltip-error"data-rel="tooltip"title="Delete"><span class="red"><i class="icon-trash bigger-120"></i></span></a></li></ul></div></div></td></tr>'));
        });
    });

    // 添加商品
    addGoodsListener()

});

    $(function(){
    $("#header").append('<span style="float: right;margin-right: 10%;"><button class="btn btn-warning" style="outline: none;font-size: 1.2em;font-weight: bold;" data-toggle="modal" data-target="#modal" onclick="addGoods()">添加商品</button> </span>');
    });

function addGoodsListener() {
    $("#addGoodsForm").submit(function() {
        var goodsName = $('#goodsName').val()
        var goodsNumber = $('#goodsNumber').val()
        var goodsDefNumber = $('#goodsDefNumber').val()
        var goodsPrice = $('#goodsPrice').val()
        var goodsMessage = $('#goodsMessage').val()

        if (goodsName != null && goodsName != "") {
            var options = {
                url:baseUrl + "/goods/add",
                success: dealUploadResponse,
                resetForm: true,
                dataType:  'json'
            };

            $(this).ajaxSubmit(options)
            return false;
        }
        return false;//防止刷新
    });
}

//商家认证回调函数
function dealUploadResponse(responseText, statusText, xhr, $form) {

    if(statusText == "success") {
        if(responseText.serviceResult == true) {
            alert("添加成功！");
        } else {
            alert("添加失败！");
        }
    }
}