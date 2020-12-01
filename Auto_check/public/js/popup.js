
$(document).ready(function () {
	$('#send').click(function (){
        var mssv = $("#mssv").val();
       document.location = "http://localhost:83/login/check_login.php?mssv=" + mssv;
    });
}); //end document ready


