
$(document).ready(function () {
	$('#send').click(function () {
		var mssv = $("#mssv").val();
		document.location="http://localhost/training-php/show.php?mssv="+mssv;
	})
	
}); 
