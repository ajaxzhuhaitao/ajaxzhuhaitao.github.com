
/* 选项卡 */
$(function() {
    $.ajax({
        url: '/home-web/News/first',
        type: 'post',
//        data: {
//            type: 1,
//            page: 1,
//            pagenum: 6
//        },
        success: function(data) {
            if (data.error) {
                window.location.href = "404.html";
            }
            if (!data) {
                alert('暂无数据！');
            } else {
                render(data.one, '#tab1Box');
                render(data.two, '#tab2Box');
                render(data.three, '#tab3Box');
                render(data.four, '#tab4Box');
                page1(data.pageCount1, '#page1');
                page2(data.pageCount2, '#page2');
                page3(data.pageCount3, '#page3');
                page4(data.pageCount4, '#page4');
            }
        },
        error: function(msg) {
            console.log(msg);
        }
    });

    $('.tabbox .content ul').width(
        1200 * $('.tabbox .content li').length + 'px');
    $(".tabbox .tab a").mouseover(function() {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        var distance = -1200 * index;
        $('.tabbox .content ul').stop().animate({
            left: distance
        });
    });

});

// //渲染新闻列表
function render(obj, ele) {
    var html = '';
    for (var i = 0; i < obj.length; i++) {
        html += '<a href="newsdetail.html?id=' + obj[i].id + '" target="_blank">' +
            '<dl>' +
            '<img src="' + obj[i].imgaddr + '" alt="">' +
            '<dt title="'+ obj[i].title+'">' + obj[i].title + '</dt>' +
            '<dd>' + obj[i].introduce + '</dd>' +
            '</dl>' +
            '</a>'
    }
    $(ele).html(html);
}

// 渲染新闻列表
// function render(obj, ele) {
// 	var html = '';
// 	for (var i = 0; i < obj.length; i++) {
// 		html += '<a href="newsdetail.html" target="_blank">' + '<dl>'
// 				+ '<img src="' + obj[i].imgaddr + '" alt="">' + '<dt>'
// 				+ obj[i].title + '</dt>' + '<dd>' + obj[i].introduce + '</dd>'
// 				+ '</dl>' + '</a>'
// 	}
// 	$(ele).html(html);
// }

// 分页
function page1(pageCount, ele) {
    $(ele).createPage({
        pageCount: pageCount,
        current: 1,
        backFn: function(p) {
            console.log(p);

            $.ajax({
                url: '/home-web/News/typeNews',
                type: 'post',
                data: {
                    type: 1,
                    page: p,
                    pagenum: 6
                },
                success: function(data) {
                    if (data.error) {
                        window.location.href = "404.html";
                    };
                    if (!data.result) {
                        alert("暂无数据")
                    } else if (data.result) {
                        render(data.result, '#tab1Box');
                    }
                }
            });
        }
    })
}

function page2(pageCount, ele) {
    $(ele).createPage({
        pageCount: pageCount,
        current: 1,
        backFn: function(p) {
            console.log(p);

            $.ajax({
                url: '/home-web/News/typeNews',
                type: 'post',
                data: {
                    type: 2,
                    page: p,
                    pagenum: 6
                },
                success: function(data) {
                    if (data.error) {
                        window.location.href = "404.html";
                    };
                    if (!data.result) {
                        alert("暂无数据")
                    } else if (data.result) {
                        render(data.result, '#tab1Box');
                    }
                }
            });
        }
    })
}

function page3(pageCount, ele) {
    $(ele).createPage({
        pageCount: pageCount,
        current: 1,
        backFn: function(p) {
            console.log(p);

            $.ajax({
                url: '/home-web/News/typeNews',
                type: 'post',
                data: {
                    type: 3,
                    page: p,
                    pagenum: 6
                },
                success: function(data) {
                    if (data.error) {
                        window.location.href = "404.html";
                    };
                    if (!data.result) {
                        alert("暂无数据")
                    } else if (data.result) {
                        render(data.result, '#tab1Box');
                    }
                }
            });
        }
    })
}

function page4(pageCount, ele) {
    $(ele).createPage({
        pageCount: pageCount,
        current: 1,
        backFn: function(p) {
            console.log(p);

            $.ajax({
                url: '/home-web/News/typeNews',
                type: 'post',
                data: {
                    type: 4,
                    page: p,
                    pagenum: 6
                },
                success: function(data) {
                    if (data.error) {
                        window.location.href = "404.html";
                    };
                    if (!data.result) {
                        alert("暂无数据")
                    } else if (data.result) {
                        render(data.result, '#tab1Box');
                    }
                }
            });
        }
    })
}
