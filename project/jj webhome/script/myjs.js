/*报名入口*/
var phone = document.getElementById('testDiv1')
var JP = document.getElementById('JP')
var JK = document.getElementById('JK')

phone.onmouseover = function() {
	JP.style.display = 'block'
	JP.style.cursor = 'pointer'
	JK.style.display = 'block'
	JK.style.cursor = 'pointer'
};
phone.onmouseout = function() {
	JP.style.display = 'none'
	JK.style.display = 'none'
};

JP.onclick = function() {
	$('#popup').fadeIn('fast');
	$('#form_JP').fadeIn('fast');
};
JK.onclick = function() {
	$('#popup').fadeIn('fast');
	$('#form_JK').fadeIn('fast');
};
document.getElementsByClassName('close_JK')[0].onclick = function() {
	$('#form_JK').fadeOut('fast');
	$('#popup').fadeOut();
	$('input').val("");
	$('#text_JK').text("");
};
document.getElementsByClassName('close_JP')[0].onclick = function() {
	$('#form_JP').fadeOut('fast');
	$('#popup').fadeOut();
	$('input').val("");
	$('#text_JP').text("");
};

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
		alert("折扣不能为空");
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
		alert("不是完整的11位手机号");
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
				alert('暂无数据！');
			} else {
				$('#text_JK').text(data);
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
		alert("折扣不能为空");
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
		alert("不是完整的11位手机号");
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
				alert('暂无数据！');
			} else {
				$('#text_JP').text(data);
			}
		},
		error : function(msg) {
			console.log(msg);
		}
	});
}

/* 浮游 */
window.onload = window.onscroll = function() {
	var sDiv = document.getElementById('testDiv1');
	// document.body.scrollTop 兼容谷歌浏览器
	// document.documentElement.scrollTop 兼容IE浏览器
	// 滚动点离浏览器顶部的距离
	var varTop = document.documentElement.scrollTop || document.body.scrollTop;
	// oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
	var t = varTop
			+ (document.documentElement.clientHeight - sDiv.offsetHeight) / 2
			+ 160 + 'px';
	// 给DIV的高赋值
	// document.documentElement.clientHeight可见区域的高度
	// oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
	// 让速度发生变化
	startMove(parseInt(t), 7);
}
var varTimer = null;

function startMove(destination, speed) {
	var sDiv = document.getElementById('testDiv1');
	// 开启一个定时器
	clearInterval(varTimer);
	varTimer = setInterval(function() {
		// div一开始离目标的距离除以speed div移动的速度 div距离越近 速度越小
		var varSpeed = (destination - sDiv.offsetTop) / speed;
		// Round是四舍五入 ceil向上取整。。floor向下取整
		varSpeed = varSpeed > 0 ? Math.ceil(varSpeed) : Math.floor(varSpeed);
		// 到达目的地 清除定时器
		if (sDiv.offsetTop == destination) {
			clearInterval(varTimer);
		} else {
			// 移动
			sDiv.style.top = sDiv.offsetTop + varSpeed + 'px';
		}
	}, 30);
};

