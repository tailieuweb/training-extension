<?php
require "./functions.php";
$coon;

if(isset($_GET['mssv']))
{
    $MSSV = $_GET['mssv'];
  $sql = "INSERT INTO `autocheck` ( `mssv`) VALUES ('$MSSV')";
  $details = mysqli_query($conn, $sql);
}
$b;
$query = " SELECT * FROM `autocheck` ORDER BY `autocheck`.`mssv` ASC ";
$results = mysqli_query($conn, $query);
foreach($results as $aa)
{
  echo $b = $aa['mssv'];
}

 $danhsach = "SELECT * FROM `user` WHERE `Massv` = '$b' ";
 $list = mysqli_query($conn, $danhsach);


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
foreach($list as $value)
{?>
 <b><?php echo $value['user_type']; ?></b>  <br>
  <?php
}
?>
</body>
</html>
