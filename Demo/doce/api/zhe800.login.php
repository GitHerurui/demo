<?php
# 先获取提交的参数
$phone = $_REQUEST["phone"];
$password = $_REQUEST["password"];

# 连接数据库并且到数据库中进行查询
$db = mysqli_connect("127.0.0.1", "root", "", "zhe800register");
 
# 用户名存在 && 密码要正确
# 检查指定的用户名
$sql = "SELECT * FROM `phonenum` WHERE phone = '$phone'";
$result = mysqli_query($db,$sql);
$data = array("status" => "", "msg" => "", "data" => "");
if(mysqli_num_rows($result) == "0")
{
  $data["status"] = "error";
  $data["msg"] = "登录失败：该用户不存在";
}else{
  /* 检查密码是否正确 */
  if(mysqli_fetch_array($result)["password"] != $password)
  {
    $data["status"] = "error";
    $data["msg"] = "登录失败：密码不正确！";
  }else{
    $data["status"] = "success";
    $data["msg"] = "恭喜您，登录成功！";
  }
}

echo json_encode($data, true);
?>