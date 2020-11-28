var currentCookie="";
var currentUid = "";
$(document).ready(function () {
    $("#reload").click(function() {
        $.ajax({
            url: "http://localhost/training-php/autocheck.php",
            context: document.body,
            success: function(s,x){
                $(this).html(s);
            }
        });
    });

    $("#send").click(function () {
        window.open('http://localhost/training-php/autocheck.php', '_blank', 'toolbar=0,location=0,menubar=0');
    });
	
    $("#check").click(function () {
		chrome.storage.sync.set({
            "userselected": "5","textselected":"0",
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