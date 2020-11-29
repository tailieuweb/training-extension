<?php
include("db.php");

//Bắt id để điểm danh
if(isset($_GET['mssv']))
{
    $mssv = strtoupper($_GET['mssv']);
    $sql = "UPDATE `listsv` SET `diemdanh`= 1 WHERE mssv = '$mssv'";
    mysqli_query($conn, $sql);
}


$sql1 = "SELECT * FROM `listsv`";
$result = $conn->query($sql1);
?>