$(document).ready(function() {
    $('#send').click(function(e) {
        var isValid = true;
        $('#mssv').each(function() {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                document.getElementById("notification").innerHTML = "Please Nhập MSSV !!";
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost/training-php/autocheck.php/?mssv=" + $('#mssv').val(), true);
                xhttp.send();
                document.getElementById("notification").innerHTML = "Điểm Danh Thành Công!";
                $("#notification").css({
                    "color": "red"
                });
            }
        });
        if (isValid == false)
            e.preventDefault();
    });


});