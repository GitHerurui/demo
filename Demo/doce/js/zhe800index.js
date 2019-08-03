$(function(){

    var arr =[{"bannerimg":"../img/950x304.ac4154922205a0462dae3faf2709e225.951x304+1-1.951x304.jpg",
    "smimg":["../img/320x320.2ab2135cbfa95cc222668eebd6426172.160x160.png",
    "../img/320x320.51ac42c197bfd944a2713e153cbbfc54.160x160.png"]
   
    },{
        "bannerimg":"../img/950x304.64368bee18d3aeb119c5457c7645f99d.951x304+1-1.951x304.jpg",
    "smimg":["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
    "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"]
    },{
        "bannerimg":"../img/950x304.bccdb1ea7381e07f227be603cce551ba.951x304+1-1.951x304.jpg",
    "smimg":["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
    "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"]
    },{
        "bannerimg":"../img/950x304.5792c2e986fb5f3ee7fcb1831875c9a9.951x304+1-1.951x304.jpg",
    "smimg":["../img/320x320.1bb39e2d8567ee9e503d23f701ddd34a.160x160.png",
    "../img/320x320.0dac66b785ca5304951298c11b7e9e1d.160x160.png"]
    }]
//轮波图
    class BannerManager{
        constructor(data){
            this.data = data;
           
        }
    
    init(){
    this.createHTML();
    $(".rt_warpper").html(this.createHTML());
     this.length = this.data.length;
     this.index = 0;
     this.next();
     this.mons();
     this.click()
     
    }
    //生成标签
    createHTML(){
        // let index ='';
        let html1 = this.data.map((item)=>{
            
            let li =item.smimg.map((ele)=>{
               
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
        let inli = this.data.map((item, i)=>{
            return i === 0 ? `<li class="lis active"></li>`: `<li class="lis"></li>`
        }).join('')
        let ul =`<ul class="list-index">${inli}</ul>`
        return `${html1}${ul}`
       
       
    }
    //图片切换
    next(){
       let i = 0;     
       this.timer = setInterval(()=>{
           if(i > 3){
               i = 0
           }else{
            $(".banner").eq(i).show().siblings(".banner").hide();
            $(".lis").eq(i).addClass("active").siblings().removeClass("active");
            i++
           }          
        },2000);
   
    }

    click(){
        $(".lis").mouseover(function(){
            console.log($(this).index());
            let index = $(this).index();
            $(".banner").eq(index).show().siblings(".banner").hide();
            $(".lis").eq(index).addClass("active").siblings().removeClass("active");
           
        })
    }


    mons(){
        //鼠标移入
        $(".banner").mouseover (()=> {           
           clearInterval(this.timer);    
        });
        //鼠标移除
        $(".banner").mouseleave (()=> {
            // setInterval(this.timer)
            this.next();
           
        });
    }
   
  }
  let banner = new  BannerManager(arr);
       banner.init();

       //友情轮播
setInterval(()=>{
    var itop = parseInt($(".links ul").css("top"));
    // console.log(itop);
    if(itop < -66){
        itop = 0;
    } else {
        itop -= 22;
        let ltop = itop + "px";
 $(".links ul").css("top",[ltop]);
        // console.log(ltop);
    }
         
    },2000)
      
    

});