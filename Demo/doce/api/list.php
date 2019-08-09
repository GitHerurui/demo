<?php
$con = mysqli_connect("127.0.0.1", "root", "", "zhe800register");

$data = file_get_contents("../list.json");

$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
  $src = $arr[$i]["src"];
  $title = $arr[$i]["title"];
  $sale_price = $arr[$i]["sale_price"];
  $list_price = $arr[$i]["list_price"];
  $active_type = $arr[$i]["active_type"];
  $sql = "INSERT INTO `list` (`src`, `title`, `sale_price`, `list_price`, `active_type`) VALUES ('$src', '$title', '$sale_price', '$list_price', '$active_type')";
  mysqli_query($con, $sql);
}

?>