<?php
$con = mysqli_connect("127.0.0.1", "root", "", "zhe800register");

$data = file_get_contents("../zhe800.json");

$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
  $src = $arr[$i]["src"];
  $title = $arr[$i]["title"];
  $coupon = $arr[$i]["coupon"];
  $brand_fav = $arr[$i]["brand_fav"];
  $rest = $arr[$i]["rest"];

  $sql = "INSERT INTO `indexlist` (`src`, `title`, `coupon`, `brand_fav`, `rest`) VALUES ('$src', '$title', '$coupon', '$brand_fav', '$rest')";
  mysqli_query($con, $sql);
}

?>
