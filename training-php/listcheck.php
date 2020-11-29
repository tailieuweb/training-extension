<?php
include("./connection/db.php");
include("./connection/user.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh Sách Điểm Danh</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
        * {
            padding: 0;
            box-sizing: border-box;
            margin: auto;

        }

        .table {
            width: 60%;

        }

        input {
            position: absolute;
            border: solid 1px;
            width: 3%;
            height: 3%;
            text-align: center;
        }

        .row_check {
            text-align: left;
        }
        .title{
            text-align: center;
        }
        .btn_save{
            text-align: right;
            background: green;
            color:white;
        }
    </style>
</head>
    <div class="title"> <h1>Danh Sách Điểm Danh</h1></div>
<body>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">MSSV</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">Vắng</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = $result->fetch_assoc()) { ?>
                <tr>
                    <td><?php echo $row["id"] ?></td>
                    <td><?php echo $row["mssv"] ?></td>
                    <td><?php echo $row["fullname"] ?></td>
                    <td>
                        <div class="row_check">
                        <?php
                        if($row["diemdanh"] == 0)
                        {?>
                            <input type="username" name="" id="" value ="5">
                        <?php }else{ ?>
                            <input type="text" name="" id="" value ="0">
                         <?php } ?>                          
                        </div>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>