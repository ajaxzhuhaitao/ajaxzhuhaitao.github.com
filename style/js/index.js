$(function(){
/*导航*/
  /*console.log($('.louCeng').eq(0).offset().top);
	console.log($('.louCeng').eq(1).offset().top);
	console.log($('.louCeng').eq(2).offset().top);
	console.log($('.louCeng').eq(3).offset().top);
	console.log($('.louCeng').eq(4).offset().top);
	console.log($('.louCeng').eq(5).offset().top);*/
	$('.navRight .navUl li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		//alert($(this).index());
		var jump = $('.louCeng').eq($(this).index()).offset().top;
		$('body,html').stop().animate({'scrollTop':''+jump+'px'},300);
    });
	
	function myFn(par1){
		$('.navRight .navUl li').eq(par1).addClass('current').siblings().removeClass('current');
	}
	$(window).scroll(function(e) {
		//判断滚动距离如果大于第几层距离顶部的距离，那么就让第几个li添加特殊current
		var sT = $(window).scrollTop();
		if(sT >= $('.louCeng').eq(5).offset().top){
			myFn(5);
		}else if(sT >= $('.louCeng').eq(4).offset().top){
			myFn(4);
		}else if(sT >= $('.louCeng').eq(3).offset().top){
			myFn(3);
		}else if(sT >= $('.louCeng').eq(2).offset().top){
			myFn(2);
		}else if(sT >= $('.louCeng').eq(1).offset().top){
			myFn(1);
		}else if(sT >= $('.louCeng').eq(0).offset().top){
			myFn(0);
		}
    });
	

/*ui 高写实轮播*/
	
	$(document).ready(function(){
			//复制所有的li
			$(".stage ul li").clone().appendTo(".stage ul");
			dongyici(14448);	//调用函数

			function dongyici(shijian){
				//开跑
				$(".stage ul").animate({"left":-1806},shijian,"easieLinear", function(){
					$(this).css("left",0);
					dongyici(14448);	//迭代。自己调用自己。
				});
			}

			$(".stage").mouseenter(function(){
				$(".stage ul").stop();
			});

			$(".stage").mouseleave(function(){
				//我现在鼠标离开之后，到底要为剩余的动画分配多少时间？
				//按比例来！
				//如果现在还没有走的路程，比较短；那么就分配剩余的时间少一些。
				//如果现在还没有走的路程，比较长；那么就分配剩余的时间长一些。
				//已经走过的路程。取绝对值。
				// Math.abs 绝对值
				// parseFloat 去掉px单位
				var x = Math.abs(parseFloat($(".stage ul").css("left")));	
				var t = (1806 - x) / 1806 * 14448;	//剩余应该分配的时间
				dongyici(t);
			});
			$('.stage ul li').hover(function(e) {
				$(this).siblings().stop().fadeTo(300,0.5);
			},function(){
				$(this).siblings().stop().fadeTo(300,1);
			});
		});
/*app呼吸轮播图*/
	var num = 0;
	var timer01 = null;
	timerFn = function(e){
		$('.app .appUl li').eq(num).stop().fadeOut();
		num++;
		if(num > 6){
			num = 0;	
		}
		$('.app .appUl li').eq(num).stop().fadeIn();
	}
	timer01 = setInterval(timerFn,3000);
	$('.app .appUl').hover(function(e) {
		clearInterval(timer01);
	},function(){
		clearInterval(timer01);
		timer01 = setInterval(timerFn,3000);
	});
	$('.app .appUl li:first').show();
	$('.upRight .appRight').click(function(e) {
		$('.app .appUl li').eq(num).stop().fadeOut();
		num++;
		if(num > 6){
			num = 0;	
		}
		$('.app .appUl li').eq(num).stop().fadeIn();
	});	
	$('.upRight .appLeft').click(function(e) {
		$('.app .appUl li').eq(num).stop().fadeOut();
		num--;
		if(num < 0){
			num = 6;	
		}
		$('.app .appUl li').eq(num).stop().fadeIn();
	});	
/*选择栏*/
var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			
			},
			
			hoverEffect: function () {
			
				// Simple parallax effect
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			
			}

		};
		
		// Run the show!
		filterList.init();
})
/*添加收藏夹*/
