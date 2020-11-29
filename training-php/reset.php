<?php
session_start();

include('functions.php');

$results = [];

if (isset($_GET['list'])) {
    if (isAdmin()) {
        $query = "UPDATE `listsv` SET `diemdanh`=0 WHERE 1";
        $results = mysqli_query($conn, $query);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>