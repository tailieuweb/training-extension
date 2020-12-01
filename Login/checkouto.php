<?php
require "./functions.php";

$query = "SELECT * FROM `users`";
$results = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/css/bootstrap.min.css">
    <link rel="stylesheet" type="" href="public/css/styles.css">
    <link rel="stylesheet" type="" href="public/css/editstyle.css">
    <style>
 h1{
     text-align: center;
     margin: 50px 0px;
 }
#list_danhsach{
    width: 80%;
    position: relative;
    left: 10%;
    
}
.for{
    text-align: center;
    width:10%;
    border-radius:5px;
    border:none;
    background:#f6f6f6;
}
    </style>
</head>
<body>
        <div class="top_container">
            <h1 >Danh Sanh Sinh Viên</h1>
            <table id="list_danhsach"> 
                 
                        <tr>
                            <th>STT</th>
                            <th>name</th>
                            <th>MSSV</th>
                            <th>Số Tiết vắng</th>
                         
                        </tr>
                                <?php 
                                $i = 0;
                                foreach($results as $value){
                                ?>
                            <tr>
                            
                                <th><?php echo ++$i ?></th>
                                <th><?php echo $value['username'] ?></th>
                                <th class="mssv"><?php echo $value['mssv'] ?></th>
                                <th ><input disabled class="for" type="text" id = "<?php echo $value['mssv'] ?>"></th>
                               
                             </tr>
                            
                                <?php }?>      
                             
                             </table> 
        </div>
</body>
</html>