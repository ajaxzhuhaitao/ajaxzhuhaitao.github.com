//为客户服务列表添加鼠标事件
function showItems(){
	$("[id='service_items']").css('display','block');
}
function hideItems(){
	$("[id$='service_items']").css('display','none');
}
/*图片轮播部分*/
var imgs=[
	{"i":0,"img":"img/banner_01.jpg"},
    {"i":1,"img":"img/banner_02.jpg"},
    {"i":2,"img":"img/banner_03.jpg"},
  //  {"i":3,"img":"img/banner_04.jpg"},
   // {"i":4,"img":"img/banner_05.jpg"},
];
var slider={
	DURATION:1000,
	DISTANCE:0,
	STEPS:200,
	interval:0,
	step:0,
	timer:null,
	LIWIDTH:0,
	moved:0,
	WAIT:3000,
	canAuto:true,
	init:function(){
		this.LIWIDTH=parseFloat(getComputedStyle($('#slider')[0]).width);
		this.updateView();
		var me=this;
		this.interval=this.DURATION/this.STEPS;
		$("#idxs")[0].addEventListener("mouseover",function(e){
			if(e.target.nodeName=="LI"&&e.target.className!="hover"){
				var n=e.target.innerHTML-$("#idxs .hover").innerHTML;
				me.move(n);
		}
		});
		$("#slider")[0].addEventListener("mouseover",function(){
			me.canAuto=false;
		});
		$("#slider")[0].addEventListener("mouseout",function(){
			me.canAuto=true;
		})
		this.autoMove();
	},
	autoMove:function(){
		var me=this;
		this.timer=setTimeout(function(){
			if(me.canAuto==true){me.move(1);}
			me.autoMove();
		},this.WAIT);
	},
	move:function(n){
		if(this.timer!=null){
			clearTimeout(this.timer);
			$("#imgs")[0].style.left=0;
		}
		this.DISTANCE=this.LIWIDTH*n;
		this.step=this.DISTANCE/this.STEPS;
		if(n<0){
			imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
			$("#imgs")[0].style.left=this.DISTANCE+"px";
			this.updateView();
		}
		this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
	},
	moveStep:function(n){
		var l=parseFloat(getComputedStyle($("#imgs")[0]).left);
		$("#imgs")[0].style.left=l-this.step+"px";
		this.moved+=1;
		if(this.moved<this.STEPS){
			this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
		}else{
			if(n>0){
			imgs=imgs.concat(imgs.splice(0,n));
			this.updateView();
			}
			$("#imgs")[0].style.left=0;
			this.timer=null;
			this.moved=0;
			this.autoMove();
		}
	},
	updateView:function(){
		$("#imgs")[0].style.width=this.LIWIDTH*imgs.length+"px";
		for(var i=0,lis="",idxs="";i<imgs.length;i++){
			lis+='<li><img src="'+imgs[i].img+'"></li>';
			idxs+='<li>'+(i+1)+'</li>';
		}
		$("#imgs")[0].innerHTML=lis;
		$("#idxs")[0].innerHTML=idxs;

		$("#idxs>li")[imgs[0].i].className="hover";
	},
}
function getImgs(){
	$('.row:gt(0)').remove();
	$('.row').html('');
	$.get('php/yz.php',function(arr){
		for(var i=0;i<arr.length;i++){
			$('.row').append('<div class=col-md-3><img class="img-responsive" src=img/home/'+arr[i].imgSrc+'.jpg><p>￥'+arr[i].imgPrice+'</p></div>')
		}
		$('.container-fluid img').click(function(){
			window.open('newProduct.html','_blank');
		})
	})
}
function getImg(){
	$('.container-fluid').html('');
	$.get('php/yzhome.php',function(arr){
		for(var i=0;i<arr.length;i+=2){
			$('.container-fluid').append('<div class="row"><div class=col-md-6><img class="img-responsive" src=img/home/'+arr[i].imgSrc+'.jpg></div><div class=col-md-6><img class="img-responsive" src=img/home/'+arr[i+1].imgSrc+'.jpg></div></div>')
		}
		$('.container-fluid img').click(function(){
			window.open('newProduct.html','_blank');
		})
	})
}
getImg();
var i=0;
var timer=setInterval(function(){
	i++;
	if(i%2==0){
		getImg();
	}else{
		getImgs();
	}
  if(i==4){
		clearInterval(timer);
	}
},5000)
window.onload=function(){
	$(".service").on("mouseover",showItems);
	$(".service").on("mouseout",hideItems);
	slider.init();
}



