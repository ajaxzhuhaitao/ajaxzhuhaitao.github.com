$(function() {
	var url = window.location.search;
	var nurl = url.split('=');
	var str = decodeURI(nurl[1]);
	console.log(str)
	$.ajax({
		url : '/home-web/News/oneNews',
		type : 'post',
		data : {
			id : str
		},
		success : function(data) {
			if (data.error) {
				window.location.href = "404.html";
			}
			if (!data) {
				alert('暂无数据！');
			} else {
				getdetail(data.result);

			}
		},
		error : function(msg) {
			console.log(msg);
		}
	});
})

function getdetail(obj) {
	$('.newstitle').text(obj.title)
	$('.date').text('发布日期：' + obj.issue)
	$('.newswraper').html(obj.content);
	if (obj.mp4Path != "" || obj.webmPath != "") {
		var html = "";
		html += '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="800" height="464"  poster="http://image.wejiji.com/home/vedio/frame.png" data-setup="{}">'
				+ '<source id="mp4url" src="'
				+ obj.mp4Path
				+ '" type="video/mp4" />'
				+ '<source id="webmurl" src="'
				+ obj.webmPath
				+ '" type="video/webm" />'
				+ '<track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track>'
				+ '<track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track>'
				+ '</video>'
		$('#newsvedio').html(html);
	}

}