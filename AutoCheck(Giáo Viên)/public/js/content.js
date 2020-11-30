
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "start"){
            diemdanh();
        }
    }
);
function diemdanh() {
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
                    stv.value = "";
                }
            }
        });
    });
}
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
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "openpopup"){
            let newWindow = window.open("diemdanh.php", "OpenPopup", "width=800,height=400,left=400%,top=200%,scrollbars:yes");
            newWindow.onload = function() {

                var body = newWindow.document.body;
                var div_myextension = newWindow.document.createElement("div");
                var btn_diemdanh = newWindow.document.createElement("button");
                var btn_reset = newWindow.document.createElement("button");
                var btn_close_window = newWindow.document.createElement("button");

                div_myextension.setAttribute("id","myextension");
                div_myextension.classList = "text-center pt-3 pb-3";
                div_myextension.style.border = "1px solid #000";
                div_myextension.style.width = "100%";

                btn_diemdanh.innerText = "Điểm Danh";
                btn_diemdanh.classList = "btn btn-primary mr-3";
                btn_diemdanh.setAttribute("id","diemdanh");

                

                btn_diemdanh.addEventListener("click", function () {
                    var arr = newWindow.document.getElementsByClassName("mssv");
                    for (let index = 0; index < arr.length; index++) {
                        var stv = newWindow.document.getElementById(arr[index].textContent);
                        stv.value = "5";
                    }
                    $.get("http://localhost:8080/UserLogin/dsdiemdanh.php",function (data) {
                        var arrUsercheck = JSON.parse(data);
                        arrUsercheck.forEach(element => {
                            for (let index = 0; index < arr.length; index++) {
                                var stv = newWindow.document.getElementById(arr[index].textContent);
                                if (arr[index].textContent == element['mssv']) {
                                    stv.value = "";
                                }
                            }
                        });
                    });
                });

                btn_reset.innerText = "Reset";
                btn_reset.classList = "btn btn-warning mr-3";
                btn_reset.setAttribute("id","reset");

                

                btn_reset.addEventListener("click", function () {
                    var arr = newWindow.document.getElementsByClassName("mssv");
                    for (let index = 0; index < arr.length; index++) {
                        var stv = newWindow.document.getElementById(arr[index].textContent);
                        stv.value = "";
                        
                    }
                });

                btn_close_window.innerText = "Đóng";
                btn_close_window.classList = "btn btn-danger";
                btn_close_window.setAttribute("id","close_window");

                div_myextension.appendChild(btn_diemdanh);
                div_myextension.appendChild(btn_reset);
                div_myextension.appendChild(btn_close_window);
                body.appendChild(div_myextension);

                btn_close_window.addEventListener("click", function () {
                    newWindow.close();
                });
            };
        }
    }
);