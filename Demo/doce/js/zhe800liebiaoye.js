$(function () {
	$("#header").load("./zhe800.header.html");
	$("footer").load("./zhe800.footer.html");

	//回到顶部
	$("#goTop").click(function (e) {
		$('html ,body').animate({
			scrollTop: 0
		}, 300);
		return false;

	});

	//顶部菜单
	windowAddMouseWheel();
	function windowAddMouseWheel() {
		var scrollFunc = function (e) {
			var scrollTop = window.scrollY;
			// console.log(scrollTop);
			e = e || window.event;
			if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
				if (e.wheelDelta > 0 && scrollTop > 700) { //当滑轮向上滚动时
					$(".scollt").css("opacity", 1)

				} else {
					$(".scollt").css("opacity", 0)
				}

			} else if (e.detail) { //Firefox滑轮事件
				if (e.detail > 0 && scrollTop > 700) { //当滑轮向上滚动时
					$(".scollt").css("opacity", 1)
				} else {
					$(".scollt").css("opacity", 0)
				}

			}
		};
		//给页面绑定滑轮滚动事件
		// if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
		// 	document.addEventListener('DOMMouseScroll', scrollFunc, false);
		// }
		//其他浏览器直接绑定滚动事件
		window.onmousewheel = document.onmousewheel = scrollFunc;
	}


	//列表部分
	
	$.ajax({
		type: "post",
		url: "../list.json",
		dataType: "json",
		success: function (response) {
			$.each(response, function (index, ele) {
				$("#bd-detail-list").append(
					`<li>
				<div class="insaid">
					<div class="bimg">
						<img src="${ele.src}"
							alt="">
					</div>
					<h3>
						<a href="" class="title">${ele.title}</a>
					</h3>
					<h4>
					${ele.list_price}
						<del>${ele.sale_price}</del>
						<span>${ele.active_type}</span>
					</h4>
					<div class="bt-title">
						<span class="sp1">包邮</span>|
						<span class="sp2">返积分</span>|
						<a href="" class="a1">退货补贴优惠券</a>
						<a href="" class="a2">收藏</a>
						<a href="" class="a3">[详情]</a>
					</div>
					<span class="inventory">少量库存</span>
				</div>
			</li>
			 `
				);
			});
			$("#bd-detail-list").on("click", "li", function () {
				console.log(5555);
				let index = $(this).index()
				var html = objToStr(response[index]);
              
				window.open ('shangpinxiangqingye.html?'+ html);
			});

		}
		
	});
	console.log(data);
	



});