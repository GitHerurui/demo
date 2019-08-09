$(function(){
    $("#header").load("./zhe800.header.html");
    $("footer").load("./zhe800.footer.html");

   
   $("#size").on("click","span", function () {
      $(this).addClass("active").siblings("span").removeClass("active");
   });

   $("#color").on("click","dd", function () {
       console.log($(this));
    $(this).addClass("active").siblings("dd").removeClass("active");
 });

 $(".jian").click(function (e) { 
    let vl = $("#shul").val();
    console.log(vl);
    if(vl > 1){
        vl--
        $("#shul").val(vl)
    }else{
        alert('数量不能为空')
    }
     
 });

 $(".jia").click(function (e) { 
    
    let vl = $("#shul").val();
    if(vl < 20){
        vl++
        $("#shul").val(vl)
        
    }else{
        alert("限购20件")
    }
     
 });
   
})
