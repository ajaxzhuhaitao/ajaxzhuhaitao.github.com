/*绘制地图*/
var map1=new BMap.Map($('.map')[0]);
var point1=new BMap.Point(113.781182,34.758525);
map1.centerAndZoom(point1,15);
var marker1=new BMap.Marker(point1);
//添加一个地图标记
marker1.setAnimation(BMAP_ANIMATION_BOUNCE);//标记点添加动画
map1.addOverlay(marker1);
/*地图缩放*/
var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
map1.addControl(new BMap.NavigationControl(opts));
/*地图全景*/
var stCtrl = new BMap.PanoramaControl();
stCtrl.setOffset(new BMap.Size(20, 20));
map1.addControl(stCtrl);
var cities=[
  {"id":10,"name":"中国","children":
    [{'id':101,'name':'河南省','children':
      [ {'id':1011,'name':'郑州市','point':[113.781182,34.758525]},
        {'id':1012,'name':'漯河市','point':[114.02853,33.554893]},
        {'id':1013,'name':'许昌市','point':[113.83146,34.023562]},
        {'id':1014,'name':'驻马店市','point':[114.044844,32.987812]},
        {'id':1015,'name':'周口市','point':[114.650972,33.626908]},
        {'id':1016,'name':'商丘市','point':[115.6725,34.438809]},
        {'id':1017,'name':'信阳市','point':[114.081442,32.128482]},
        {'id':1018,'name':'新乡市','point':[113.974503,35.059148]},
        {'id':1019,'name':'濮阳市','point':[115.06725,35.781056]},
        {'id':10110,'name':'安阳市','point':[114.376029,36.106565]},
        {'id':10111,'name':'焦作市','point':[113.247982,35.243753]}
      ]
    }]
  }
];
function createSels(cities){
  var sel=document.createElement('select');
  sel.add(new Option("请选择",-1));
  for(var i=0;i<cities.length;i++){
    sel.add(new Option(cities[i].name,cities[i].id))
  }
  sel.onchange=function(){
    while(this.parentNode.lastElementChild!=this){
      this.parentNode.removeChild(this.parentNode.lastElementChild);
    }
    var i=sel.selectedIndex-1;
    if(cities[i]&&cities[i].hasOwnProperty('children')){
      createSels(cities[i].children);
    }
    if(cities[i]&&cities[i].hasOwnProperty('point')){
      var p = cities[i].point;
      var map=new BMap.Map($('.map')[0]);
      var point=new BMap.Point(p[0],p[1]);
      map.centerAndZoom(point,15);
      var marker=new BMap.Marker(point);
      marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      map.addOverlay(marker);
      var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
      map.addControl(new BMap.NavigationControl(opts));
      /*地图全景*/
      var stCtrl = new BMap.PanoramaControl();
      stCtrl.setOffset(new BMap.Size(20, 20));
      map.addControl(stCtrl);
    }
  };
  $('.list').append(sel);

}
createSels(cities);
/*加载头尾部分*/
$('.header').load('headerPage.html');
$('.footer').load('footerPage.html');

