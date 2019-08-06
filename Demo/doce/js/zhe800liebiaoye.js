$(function(){
    console.log(6666);
    $("#header").load("./zhe800.header.html");
    $("footer").load("./zhe800.footer.html");

    //回到顶部
    $("#goTop").click(function (e) { 
        $('html ,body').animate({scrollTop: 0}, 300);
                   return false;
        
    });

//顶部菜单
windowAddMouseWheel();
	function windowAddMouseWheel() {
	    var scrollFunc = function (e) {
             var scrollTop = window.scrollY;
             console.log(scrollTop);
	        e = e || window.event;
	    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
		    if (e.wheelDelta > 0 && scrollTop > 700) { //当滑轮向上滚动时
               $(".scollt").css("opacity",1)
               
		    } else {
                $(".scollt").css("opacity",0)
            }
		   
	    } else if (e.detail) {  //Firefox滑轮事件
		    if (e.detail> 0 && scrollTop > 700) { //当滑轮向上滚动时
			    $(".scollt").css("opacity",1)
		    } else {
                $(".scollt").css("opacity",0)
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


});