function getSize(size){
  $('.newlist .myImgs').html('');
  $.get('php/new_size.php','size='+size,function(arr){
    for(var i=0;i<arr.length;i++){
    $('.newlist .myImgs').append(
      '<div class="col-md-3"><img src="img/'+size+'/'+arr[i].imgSrc+'.jpg"+ alt="" class="img-responsive"/></div>'
    )
    }
    //$('.newlist .myImgs img').mouseover(function(){
    //  $('.newlist .myImgs .col-md-3').append('<div></div>').css('position','relative');
    //  $('this').next().css({'width':$('img')[0].style.width,'height':$('img')[0].height/2,background:'#abc','position':'absolute','top':$('img')[0].height/2})
    //})
    /*点击进入详情页面*/
    $('.newlist .myImgs img').click(function(event){
      var target=event.target;
      if(target.nodeName=='IMG'){
        window.open('detail.html');
      }
    })
  })
}

getSize('l');
$('.newlist .size').on('click',$(".size button"),function(event){
    var target=event.target;
    if(target.nodeName=='BUTTON'){
      var size=target.innerHTML;
      getSize(size);
    }
})
$('.header').load('headerPage.html');
$('.footer').load('footerPage.html');
