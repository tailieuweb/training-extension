<?php 
require "./functions.php";

$ddsinvien = "SELECT * FROM `autocheck`";
$sinhvienouto = mysqli_query($conn,$ddsinvien);
$list = mysqli_fetch_all($sinhvienouto);
echo json_encode($list);