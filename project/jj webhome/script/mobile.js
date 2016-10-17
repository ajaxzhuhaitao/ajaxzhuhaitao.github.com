$(function() {
	
    $('.JK').css({
        " transform": "translateX(0)",
        "-webkit-transform": "translateX(0)",
    });

    
    $('.JP').css({
        " transform": "translateX(0)",
        "-webkit-transform": "translateX(0)",
    });
})

function shut(){
    $('.pop').fadeOut()
}

function submit_JK() {

    var name = document.getElementById('name').value;
    var telephone = document.getElementById('phone').value;
    var position = document.getElementById('position').value;
    var area = document.getElementById('area').value;
    var scale = document.getElementById('scale').value;
    var type = document.getElementById('shoptype').value;// *
    var category = document.getElementById('category').value;
    var stylish = document.getElementById('stylish').value;
    var min=document.getElementById('discount_a').value;//*
    var max=document.getElementById('discount_b').value;//*
    var discount;
    if(min==""&&max==""){
        // alert("折扣不能为空");
        $('.pop').fadeIn();
        $('#msg').text("折扣不能为空");
        return;
    }
    if(min==""&&max!=""){
        discount=max+"折";
    }
    if(min!=""&&max==""){
        discount=min+"折";
    }
    if(min!=""&&max!=""){
        discount=min+"——"+max+"折";
    }
    var reg = /^1\d{10}$/;
    if (!reg.test(telephone)) {
        // alert("不是完整的11位手机号");
        $('.pop').fadeIn();
        $('#msg').text("不是完整的11位手机号");
        return;
    }
    ;

    $.ajax({
        url : '/home-web/geek/insert',
        type : 'post',
        dataType : 'json',
        data : {
            name : name,
            phone : telephone,
            position : position,
            area : area,
            scale : scale,
            type : type,
            category : category,
            stylish : stylish,
            discount : discount
        },
        success : function(data) {
            if (data.error) {
                window.location.href = "404.html";
            }
            data = data.msg;
            if (!data) {
                $('.pop').fadeIn();
                $('#msg').text('暂无数据！');
            } else {
                $('.pop').fadeIn();
                $('#msg').text(data);
                $('input').val("");
            }
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}

function submit_JP() {

    var name = document.getElementById('bossname').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var company = document.getElementById('company').value;
    var brand = document.getElementById('brand').value;
    var type = $('#type option:selected').val();
    var category2 = document.getElementById('category2').value;
    var factory = $('#factory option:selected').val();
    var min=document.getElementById('discount_c').value;//*
    var max=document.getElementById('discount_d').value;//*
    var discount;
    if(min==""&&max==""){
        // alert("折扣不能为空");
        $('.pop').fadeIn();
        $('#msg').text("折扣不能为空");
        return;
    }
    if(min==""&&max!=""){
        discount=max+"折";
    }
    if(min!=""&&max==""){
        discount=min+"折";
    }
    if(min!=""&&max!=""){
        discount=min+"——"+max+"折";
    }
    var reg = /^1\d{10}$/;
    if (!reg.test(phonenumber)) {
        // alert("不是完整的11位手机号");
         $('.pop').fadeIn();
        $('#msg').text("不是完整的11位手机号");
        return;
    }
    ;

    $.ajax({
        url : '/home-web/Jipin/insert',
        type : 'post',
        dataType : 'json',
        data : {
            bossName : name,
            phone : phonenumber,
            company : company,
            brand : brand,
            type : type,
            category : category2,
            factory : factory,
            discount : discount
        },
        success : function(data) {
            if (data.error) {
                window.location.href = "404.html";
            }
            data = data.msg;
            if (!data) {
                // alert('暂无数据！');
                $('.pop').fadeIn();
                $('#msg').text('暂无数据！');

            } else {
                // $('#text_JP').text(data);
                $('.pop').fadeIn();
                $('#msg').text(data);
                $('input').val("");
            }
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}