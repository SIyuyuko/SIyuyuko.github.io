//首页目录切换(移动端展示)
function showMenu() {
	if ($(window).outerWidth() < 768) {
		$('nav').hide();//移动端默认隐藏目录
		$('.ri-menu-3-line').show();//默认显示目录展开按钮
		$('.ri-close-line').hide();//默认隐藏目录关闭按钮
		$('#menuBtn').click(function () {
			$('.ri-menu-3-line').toggle();
			$('.ri-close-line').toggle();
			$('nav').toggle();
		});
	} else {
		$('nav').show();//默认展示目录
		$('.ri-menu-3-line').hide();
		$('.ri-close-line').hide();
	};
};

function oepnUrl(url) {
	window.open(url, '_blank');
};

//页面滚动回顶部按钮展示
function navOnScroll() {
	$('#backBtn').hide();//默认隐藏按钮
	$(window).scroll(function () {
		if ($(document).scrollTop() > 20) {
			$('#backBtn').show();//页面向下滚动显示按钮
		} else {
			$('#backBtn').hide();//页面滚动回顶部隐藏按钮
		}
	});
};

//页面滚动回顶部
function backToUp() {
	$('#backBtn').click(function () {
		window.scrollTo(0, 0);
	});
};

//文档大纲侧边栏切换
function tocManage() {
	// 默认收起侧边栏
	$('#tocClose').animate({
		},100, function () {
			$('#tocClose').css({ "right": "-240px", "width": "240px", "height": "auto"});
	});
	// 点击显示侧边栏
	$('#tocOpen').click(function () {
			$('#tocClose').animate({
			}, 200, function () {
				$('#tocClose').css({ "right": "0px", "width": "240px", "height": "auto" });
			});
	});
	// 点击收起侧边栏
	$('#closeBtn').click(function () {
		$('#tocClose').animate({
		}, 200, function () {
			$('#tocClose').css({ "right": "-240px", "width": "240px", "height": "auto"});
		});
	});
};

//分享链接
function shareCustom(url) {
	$('#shareBtn').click(function () {
      // 复制到粘贴板
		let $temp = $('<input>');
		$('body').append($temp);
		$temp.val(url).select();
		if (!document.execCommand('copy')) {
			document.execCommand('copy');
			console.log("复制成功");
		};
		$temp.remove();
	});
};