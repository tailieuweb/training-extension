var arr = document.getElementsByClassName("custom_id");
for (let index = 0; index < arr.length; index++) {
    var stv = document.getElementById(arr[index].textContent);
    stv.value = "5";
}
$.get("http://localhost:8080/UserLogin/dsdiemdanh.php",function (data) {
    var arrUsercheck = JSON.parse(data);
    arrUsercheck.forEach(element => {
        for (let index = 0; index < arr.length; index++) {
            var stv = document.getElementById(arr[index].textContent);
            if (arr[index].textContent == element['user_id']) {
                stv.value = "0";
            }
        }
    });
})
