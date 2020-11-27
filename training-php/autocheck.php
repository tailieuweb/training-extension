
<?php
include("./connection/db.php");
include("./connection/user.php");
?>


<html>
    <head>
       <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Auto-check</title>
        
        <link rel="stylesheet" href="public/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/css/font-awesome.min.css">
		<link rel="stylesheet" href="public/css/styles.css">
    </head>
    <body>
		<div class="container">
        <div class="header">
            <h2>Auto check</h2>
        </div>
        <form >
            <table class="table">
                <thead>
					<tr>
						<th scope="col">id</th>
                        <th scope="col">MSSV</th>
                        <th scope="col">fullname</th>
                        <th scope="col"> Vắng</th>
                       
                        
					</tr>
                </thead>
                <tbody>
            <?php while ($row = $result->fetch_assoc()) { ?>
                <tr>
                    <!-- <th scope="row"></th> -->
                    <td><?php echo $row["id"] ?></td>
                    <td><?php echo $row["mssv"] ?></td>
                    <td><?php echo $row["fullname"] ?></td>
                    <td>
                        <div class="row_check">
                        <?php
                        if($row["diemdanh"] == 0)
                        {?>
                            <input type="username" name="" id="">
                        <?php }else{ ?>
                            <input type="text" name="" id="">
                         <?php } ?>                          
                        </div>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
            </table>

        </form>
        <div class="back" style="text-align: center">
		<button type="button" class="btn btn-info" onClick="javascript:history.go(-1)">Back</button>
        <button type="button" class="btn btn-info"  >Save</button>
        </div>
        </div>
        
    </body>
</html>