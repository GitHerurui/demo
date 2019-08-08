$(function () {
    var success = false; //是否通过验证的标志
    (function () {
        var $ = function (selector) {
                return document.querySelector(selector);
            },
            box = $(".drag"), //容器
            bg = $(".bg"), //背景
            text = $(".text"), //文字
            btn = $(".btn"), //滑块

            distance = box.offsetWidth - btn.offsetWidth; //滑动成功的宽度（距离）

        //二、给滑块注册鼠标按下事件
        btn.onmousedown = function (e) {

            //1.鼠标按下之前必须清除掉后面设置的过渡属性
            btn.style.transition = "";
            bg.style.transition = "";

            //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。

            //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
            var e = e || window.event;
            var downX = e.clientX;

            //三、给文档注册鼠标移动事件
            document.onmousemove = function (e) {

                var e = e || window.event;
                //1.获取鼠标移动后的水平位置
                var moveX = e.clientX;

                //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
                var offsetX = moveX - downX;

                //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
                if (offsetX > distance) {
                    offsetX = distance; //如果滑过了终点，就将它停留在终点位置
                } else if (offsetX < 0) {
                    offsetX = 0; //如果滑到了起点的左侧，就将它重置为起点位置
                }

                //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
                btn.style.left = offsetX + "px";
                bg.style.width = offsetX + "px";

                //如果鼠标的水平移动距离 = 滑动成功的宽度
                if (offsetX == distance) {

                    //1.设置滑动成功后的样式
                    text.innerHTML = "验证通过";
                    text.style.color = "#fff";
                    btn.innerHTML = "&radic;";
                    btn.style.color = "green";
                    bg.style.backgroundColor = "lightgreen";

                    //2.设置滑动成功后的状态
                    success = true;
                    //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                    btn.onmousedown = null;
                    document.onmousemove = null;

                    //3.成功解锁后的回调函数
                    setTimeout(function () {
                        alert('验证成功！');
                    }, 100);
                }
            }

            //四、给文档注册鼠标松开事件
            document.onmouseup = function (e) {

                //如果鼠标松开时，滑到了终点，则验证通过
                if (success) {
                    return;
                } else {
                    //反之，则将滑块复位（设置了1s的属性过渡效果）
                    btn.style.left = 0;
                    bg.style.width = 0;
                    btn.style.transition = "left 1s ease";
                    bg.style.transition = "width 1s ease";
                }
                //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
                document.onmousemove = null;
                document.onmouseup = null;
            }

        }
        return success;
    })();
    // console.log(success);


    let regPhone = /^1[3-9][0-9]{9}$/;
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;

    isok1 = false;
    isok2 = false;
    isok3 = false;
    isok4 = false;
    isok5 = false;
    isok6 = false;

    let phoneText = "";
    $('#phoneID').on('blur', function () {
        let text = $.trim($(this).val());
        let msg = $(this).nextAll(".msg_box");
        phoneText = text;
        //  //非空判断
        if (text.length == 0) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("手机号不能为空");
            //正确性判断
        } else if (!regPhone.test(text)) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("手机号不符合规范");
        } else {
            // $(this).css("border-color","red");
            msg.css("color", "green").html("√ 验证通过");
            isok1 = true;

        }

    });
    let passwordAText = "";
    $('#passwordA').on('blur', function () {
        let text = $.trim($(this).val());
        let msg = $(this).nextAll(".msg_box");
        passwordAText = text
        // console.log(msg);
        //  //非空判断
        if (text.length == 0) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("密码不能为空");
            //正确性判断
        } else if (!regPassword.test(text)) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("密码不符合规范");
        } else {
            // $(this).css("border-color","red");
            msg.css("color", "green").html("√ 验证通过");
            isok2 = true;

        }

    });

    $('#passwordB').on('blur', function () {
        let text = $.trim($(this).val());
        let msg = $(this).nextAll(".msg_box");
        // console.log(msg);
        //  //非空判断
        if (text.length == 0) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("密码不能为空");
            //正确性判断
        } else if (passwordAText != text) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("密码不匹配");
        } else {
            // $(this).css("border-color","red");
            msg.css("color", "green").html("√ 验证通过");
            isok3 = true;

        }

    });

    function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear() +
            "" // "年"
            +
            (month >= 10 ? month : "0" + month) +
            "" // "月"
            +
            (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate()) +
            "" +
            (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours()) +
            "" +
            (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes()) +
            "" +
            (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
        return datetime;
    }

    var msgCodeText = "";
    $("#code-sms").click(function () {
        msgCodeText = parseInt(Math.random() * 1000000);
        /* 检查手机号码是否正确 */
        console.log(msgCodeText);
        var text = $.trim($("#phoneID").val());
        if (text.length != 0 && regPhone.test(text)) {
            
            /* 发送网络请求：发短信 */
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-1',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '100963', //这里需要改成自己的appid
                    "showapi_sign": '5327fb0bc71848fe8502aabe2bc6726f', //这里需要改成自己的应用的密钥secret
                    "mobile": text,
                    "content": `{"code":${msgCodeText},"minute":"3","comName":"折800"}`,
                    "tNum": "T150606060601",
                    "big_msg": ""
                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function (result) {
                    console.log(result) //console变量在ie低版本下不能用
                    // alert(result.showapi_res_code)
                }
            });

            var count = 60;
            var timer = setInterval(function () {
                count--;
                if (count <= 0) {
                    $("#code-sms").html("发送短信验证码");
                    clearInterval(timer);
                } else {
                    $("#code-sms").html("重试 " + count + "s");
                }
            }, 1000);
        } else {
            alert("手机号码不正确");
        }

        /* 开启倒计时：当前的标签不可点击 */
    });

    $('#msgCode').on('blur', function () {
        let text = $.trim($(this).val());
        let msg = $(this).nextAll(".msg_box");
        // console.log(msg);
        //  //非空判断
        if (text.length == 0) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("验证码不能为空");
            //正确性判断
        } else if (msgCodeText != text) {
            $(this).css("border-color", "red");
            msg.css("color", "red").html("验证码不匹配");
        } else {
            // $(this).css("border-color","red");
            msg.css("color", "green").html("√ 验证通过");
            isok4 = true;

        }

    });

    $("#registerBtn").click(function () {
        let isCheck = $("#inputacc").is(":checked");
        if (!isCheck) {
            alert("请阅读并同意用户协议");
            return;
        }


        if (isok1 == true &&
            isok2 == true &&
            isok3 == true &&
            isok4 == true &&
            success == true
        ) {

            $.ajax({
                type: "post",
                url: "../api/zhe800register.php",
                dataType: "json",
                data: `password=${passwordAText}&phone=${phoneText}`,
                // dataType: "dataType",
                success: function (response) {
                    console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert(response.msg);
                        /* 跳转到登录页面 */
                        window.location.href = "http://www.baidu.com"
                    } else {
                        alert(response.msg);
                    }
                }
            });
        }

        // http://127.0.0.1/day-31/Code/login/sever/api/register.php 
        // http://127.0.0.1/day-31/Code/login/server/api/register.php
    })



})