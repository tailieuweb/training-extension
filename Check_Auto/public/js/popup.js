// $(document).ready(function() {
//     $("#send").click(function() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "http://localhost/local/?mssv=" + $('#mssv').val(), true);
//         xhttp.send();
//     });
// })

$(document).ready(function() {
    $('#send').click(function(e) {
        var isValid = true;
        $('#mssv').each(function() {
            if ($.trim($(this).val()) == '') {
                isValid = false;
                document.getElementById("notification").innerHTML = "Please input MSSV !!";
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost/local/?mssv=" + $('#mssv').val(), true);
                xhttp.send();
                document.getElementById("notification").innerHTML = "Successfully";
                $("#notification").css({
                    "color": "green"
                });
            }
        });
        if (isValid == false)
            e.preventDefault();
    });


});