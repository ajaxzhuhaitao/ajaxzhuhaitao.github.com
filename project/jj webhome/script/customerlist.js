$(function() {
	var url = window.location.search;
	var nurl = url.split('=');
	var str = decodeURI(nurl[1]);
	console.log(str)
	$.ajax({
		url : '/home-web/Merchant/query/shop',
		type : 'post',
		data : {
			mainIndustry : str,
			pageNum : 1,
			pageSize : 12
		},
		success : function(data) {
			if (data.error) {
				window.location.href = "404.html";
			}
			if (!data) {
				alert('暂无数据！');
			} else {
				getlist(data.shop);
				pagination(data.pageCount, str);

			}
		},
		error : function(msg) {
			console.log(msg);
		}
	});
})

// 渲染店铺列表
function getlist(obj) {
	var html = '';
	for (i = 0; i < obj.length; i++) {
		html += '<li><img src="' + obj[i].filePath + '">'
				+ '<div class="shopdetail"><p>' + obj[i].brandName + '</p><h4>'
				+ obj[i].shopName + '</h4><p>电话：' + obj[i].mobile + '</p><p>'
				+ obj[i].province + obj[i].city + obj[i].area + obj[i].address
				+ '</p></div></li>'

	}
	$('.brand').html(html)
}

// 分页
function pagination(pageCount, type) {
	$('#P1').createPage({
		pageCount : pageCount,
		current : 1,
		backFn : function(p) {
			console.log(p);
			$.ajax({
				url : '/home-web/Merchant/query/shop',
				type : 'post',
				data : {
					mainIndustry : type,
					pageNum : p,
					pageSize : 12
				},
				success : function(data) {
					if (data.error) {
						window.location.href = "404.html";
					}
					;
					if (!data) {
						alert("暂无数据")
					} else {
						getlist(data.shop);
						pagination(data.pageCount, str);
					}
				}
			});
		}
	})
}
