/**
 * 边写常用的函数：库
 * 作者：倩倩
 * 日期：
 * github：
 * 上线项目：
 */

//生成四位数随机验证码 ：4位随机数 0-9之间的数字，取4个拼接
function randomCode() {
    var html = '';//存拼接的验证码
    for (var i = 0; i < 4; i++) {
        html += parseInt(Math.random() * 10);//0-9
    }
    return html;
}

//四位数随机验证码：带字母(大小写)和数字组合
function randomNum() {
    var html = '0987654321zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';
    var code = '';//存拼接字符串
    for (var i = 0; i < 4; i++) {
        var ran = parseInt(Math.random() * html.length);
        code += html[ran];
    }
    return code;
}

//获取和设置行内样式的方法
//假设：css(box,width) 获取宽度； css(box,width,'500px') 设置宽度
function css() {
    //判断实参的个数：如果传过来两个参数，证明想获取行内样式，如果传过来三个参数，证明想设置行内样式
    if (arguments.length == 2) {
        //获取 box.style.width
        return arguments[0].style[arguments[1]];
    } else if (arguments.length == 3) {
        //设置 box.style.height = '400px';
        arguments[0].style[arguments[1]] = arguments[2];
    }
}

//通过id获取元素
function getid(id) {
    return document.getElementById(id);
}

//封装一个函数实现获取某个范围内的随机数  min-max 100 - 999
function ranNum(min, max) {
    //Math.random() 0-1 不包含1
    // return Math.random()*max + min;
    return parseInt(Math.random() * (max - min + 1)) + min;//Math.random()为0的时候，最小的时候，等于min
}

function tab(btns, divs, cln) {
    //参数一：btns代表标题；参数二：divs代表内容块；参数三：cln代表高亮的样式
    for (var i = 0; i < btns.length; i++) {//循环在前，点击在后，里面的i早就已经循环结束，变成4.所以不能通过i拿到点击li的对应下标了，才需要绑定索引记录下标值
        //绑定索引：
        btns[i].index = i;
        btns[i].onmouseover = function () {
            // console.log(666);
            //上面：鼠标经过哪个就让哪个li高亮
            //this：当前的那个
            // console.log(this.innerHTML);
            //排他
            for (var j = 0; j < btns.length; j++) {
                btns[j].className = '';
                divs[j].style.display = 'none';
            }
            this.className = cln;
            //下面：盒子要跟着当前的那个li显示
            // console.log(i);
            console.log(this.index);
            divs[this.index].style.display = 'block';
        }
    }
}

//封装方法实现字符串转成对象：字符串的格式是key0=0&key1=1&key2=2
function strToObj(str) {
    var json = {};//准备用来存对象的
    var data = '';//存参数：key0=0&key1=1&key2=2
    if (str.indexOf('?') >= 0) {
        //含有问号？，证明是一个完整的url，先截掉？前面的部分
        data = str.slice(str.indexOf('?') + 1);
    } else {
        data = str;
    }
    //字符串转成对象：key0=0&key1=1&key2=2
    var arr1 = data.split('&');///["key0=0", "key1=1", "key2=2"]
    arr1.forEach(function (item) {
        var arr2 = item.split('=');//['key0','0']
        json[arr2[0]] = arr2[1];
    });
    // console.log(json);
    return json;

}

function objToStr(obj) {//传进来一个对象，拼接成指定的格式 key0=0&key1=1&key2=2
    var html = '';//存拼接好的字符串
    for(var key in obj) {
        html += key + '=' + obj[key] + '&';//key0=0&key1=1&key2=2
    }
    return html.slice(0,-1);
}




function toDb(num) {
    //补零
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

function getTime() {
    //获取时间返回即可
    // var obj = {};//创建一个空对象，准备用来存储相关的时间信息
    var time = new Date();//获取时间戳
    var year = time.getFullYear();//年
    var mon = time.getMonth() + 1;//月 0-11
    var date = time.getDate(); //日
    var hour = time.getHours();//时
    var min = time.getMinutes();//分
    var sec = time.getSeconds();//秒
    var week = time.getDay();//星期几 0-6

    //判断星期几
    var w = '天一二三四五六';
    w = '星期' + w.charAt(week);
    // switch (week) {
    //     case 0:
    //         w = '天';
    //         break;
    //     case 1:
    //         w = '一';
    //         break;
    //     case 2:
    //         w = '二';
    //         break;
    //     case 3:
    //         w = '三';
    //         break;
    //     case 4:
    //         w = '四';
    //         break;
    //     case 5:
    //         w = '五';
    //         break;
    //     case 6:
    //         w = '六';
    //         break;
    // }
    // w = '星期' + w;

    return {
        years: year,
        mons: toDb(mon),
        dates: toDb(date),
        hours: toDb(hour),
        mins: toDb(min),
        secs: toDb(sec),
        weeks: w
    };
}

function secChang(num) {//接收一个秒数，转成：xx天xx时xx分xx秒
    var sec = num % 60;//秒数
    var min = parseInt(num / 60) % 60;//分
    var hour = parseInt(num / 60 / 60) % 24;//小时
    var day = parseInt(num / 60 / 60 / 24);//天数
    return {
        days : day,
        hours : hour,
        mins : min,
        secs : sec
    }
} 





