$(function () {
    $("#header").load("./zhe800.header.html");
    $("footer").load("./zhe800.footer.html")

    var arr = [{
        "bannerimg": "../img/950x304.ac4154922205a0462dae3faf2709e225.951x304+1-1.951x304.jpg",
        "smimg": ["../img/320x320.2ab2135cbfa95cc222668eebd6426172.160x160.png",
            "../img/320x320.51ac42c197bfd944a2713e153cbbfc54.160x160.png"
        ]

    }, {
        "bannerimg": "../img/950x304.64368bee18d3aeb119c5457c7645f99d.951x304+1-1.951x304.jpg",
        "smimg": ["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
            "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"
        ]
    }, {
        "bannerimg": "../img/950x304.bccdb1ea7381e07f227be603cce551ba.951x304+1-1.951x304.jpg",
        "smimg": ["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
            "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"
        ]
    }, {
        "bannerimg": "../img/950x304.5792c2e986fb5f3ee7fcb1831875c9a9.951x304+1-1.951x304.jpg",
        "smimg": ["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
            "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"
        ]
    }]
    //轮波图
    class BannerManager {
        constructor(data) {
            this.data = data;
            this.i = 0;
        }

        init() {
            this.createHTML();
            $(".rt_warpper").html(this.createHTML());
            this.length = this.data.length;
            this.index = 0;
            this.mons();
            this.click();
            this.autoPlayer();

        }
        //生成标签
        createHTML() {
            let html1 = this.data.map((item) => {

                let li = item.smimg.map((ele) => {

                    return ` <li>
            <img src="${ele}" alt="">
                    </li>`
                }).join('');
                return `<div class="banner">
            <img src="${item.bannerimg}" alt="">
            <ul>
                ${li}
            </ul>
            </div>`
            }).join('');
            let inli = this.data.map((item, i) => {
                return i === 0 ? `<li class="lis active"></li>` : `<li class="lis"></li>`
            }).join('')
            let ul = `<ul class="list-index">${inli}</ul>`
            return `${html1}${ul}`


        }
        //图片切换
        autoPlayer() {
            this.timer = setInterval(() => {
                this.next();
            }, 2000)
        }
        next() {
            this.i++
            if (this.i > 4) {
                this.i = 0
            }
            $(".banner").eq(this.i).show().siblings(".banner").hide();
            $(".lis").eq(this.i).addClass("active").siblings().removeClass("active");

        };



        click() {
            $(".lis").mouseenter(function () {
                let index = $(this).index();
                $(".banner").eq(index).show().siblings(".banner").hide();
                $(".lis").eq(index).addClass("active").siblings().removeClass("active");

            });
            $(".lis").mouseenter(() => {
                clearInterval(this.timer);
            });
            $(".lis").mouseleave(() => {
                this.autoPlayer()

            });

        }

        mons() {
            //鼠标移入
            $(".banner").mouseover(() => {
                clearInterval(this.timer);
            });
            //鼠标移除
            $(".banner").mouseleave(() => {
                this.autoPlayer()

            });
        }

    }
    let banner = new BannerManager(arr);
    banner.init();

    //友情轮播
    (function () {
        var i = 0;
        var timer = setInterval(function () {
            if (i > ($(".links ul li").length) - 2) {
                i = 1;
            } else {
                i++;
            }
            var ulTop = -($(".links ul li").height()) * i;
            $(".links ul").css('top', ulTop);
        }, 2000);

        $(".links ul li").mouseover(() => {
            clearInterval(timer)
        });
        $(".links ul li").mouseleave(() => {
            setInterval(timer)
        });

    })();

    //吸顶菜单
    (function () {
        window.onscroll = function () {

            var scrollTop = window.scrollY;
            // console.log(scrollTop);
            if (scrollTop > 1000) {
                $("#junav1").css("display", "block")
            } else {
                $("#junav1").css("display", "none");
            }
        };


        //回到顶部

        $("#goTop").click(function (e) {
            $('html ,body').animate({
                scrollTop: 0
            }, 300);
            return false;

        });

        

        //今日更新数据渲染
       $.ajax({
           type: "post",
           url: "../zhe800.json",  
           dataType: "json",
           success: function (response) {
            $.each(response, function (index, ele) { 
                
                 $(".l-tonew").append(
                   `<li>
                    <div class="tonewimg">
                        <img src="${ele.src}" alt="">
                    </div>
                    <div class="l-title">
                        <a href="">${ele.title}</a>
                       <span class="coupon">${ele.coupon}</span>
                    </div>
                    <p class="coupon-collect"><span class="coupon">${ele.brand_fav == null?'':ele.brand_fav}</span><span
                            class="brand_fav">${ele.rest}</span></p>
                </li>`
                 );
            });
             
           }
       });
     

       $(".l-tonew").click('li',function (e) { 
           console.log(5555);
           
           window.location.href ="../html/zhe800liebiaoye.html"
       });
            
        })()



       





})