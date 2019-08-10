<?php
$con = mysqli_connect("127.0.0.1", "root", "", "zhe800register");

$data = file_get_contents("../list.json");

$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
  $title = $arr[$i]["title"];  
  $src = $arr[$i]["src"];
  $list_price = $arr[$i]["list_price"];
  $sale_price = $arr[$i]["sale_price"];
  $active_type = $arr[$i]["active_type"];
  $sql = "INSERT INTO `list1` (`id`,`title`, `src`, `list_price`, `sale_price`, `active_type`) VALUES ('$i','$title', '$src', '$list_price', '$sale_price', '$active_type')";
  
  mysqli_query($con, $sql);
}

?>