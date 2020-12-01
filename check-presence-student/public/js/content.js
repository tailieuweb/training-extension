$(document).ready(function () {
	$('#save').click(function () {
		//way 1
		var mssv = $("#inputuser").val();
		document.location="http://localhost/php-training/for-extension/request.php?mssv="+mssv;

		//way 2
		// var xhttp = new XMLHttpRequest();
        // xhttp.open("GET", "http://localhost/php-training/for-extension/request.php?mssv="+$('#inputuser').val(), true);
        // xhttp.send();
	})
}); 