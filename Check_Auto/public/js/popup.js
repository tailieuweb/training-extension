$(document).ready(function(){
    $("#send").click(function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost/local/?mssv="+$('#mssv').val(), true);
        xhttp.send();
    })
})