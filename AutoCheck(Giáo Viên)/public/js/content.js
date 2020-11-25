
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "start"){
            var arr = document.getElementsByClassName("mssv");
            for (let index = 0; index < arr.length; index++) {
                var stv = document.getElementById(arr[index].textContent);
                stv.value = "5";
            }
            $.get("http://localhost:8080/UserLogin/dsdiemdanh.php",function (data) {
                var arrUsercheck = JSON.parse(data);
                arrUsercheck.forEach(element => {
                    for (let index = 0; index < arr.length; index++) {
                        var stv = document.getElementById(arr[index].textContent);
                        if (arr[index].textContent == element['mssv']) {
                            stv.value = "0";
                        }
                    }
                });
            });
        }
    }
);
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "reset"){
            var arr = document.getElementsByClassName("mssv");
            for (let index = 0; index < arr.length; index++) {
                var stv = document.getElementById(arr[index].textContent);
                stv.value = "";
            }
        }
    }
);