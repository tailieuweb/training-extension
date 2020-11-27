var currentCookie="";
var currentUid = "";
$(document).ready(function () {
    $("#send").click(function() {
        var tabOpen = window.open("http://localhost/training-php/autocheck.php", 'newtab'),
            xhr = new XMLHttpRequest();


        xhr.open("GET", 'http://localhost/training-php/autocheck.php' + encodeURIComponent(url), true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                tabOpen.location = xhr.responseText;
            }
        }
        xhr.send(null);
    });

	
	
    $("#check").click(function () {
		chrome.storage.sync.set({
            "userselected": "5",
			}, function() {
				console.log("ok");
			});
    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var activeTab = tabs[0];
		    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
		});
    });
}); //end document ready

function loadCurrentCookie() {
    chrome.tabs.getSelected(null, function () { //lấy cửa sổ làm việc hiện tại
		var currentUrl="localhost";
    });
}
//gọi chức năng load loadCurrentCookie()
loadCurrentCookie();