var currentCookie="";
var currentUid = "";
$(document).ready(function () {
    $("#reload").click(function() {
     
    });

    $("#send").click(function () {
        window.open('http://localhost/training-php/listcheck.php', '_blank', 'width=900px,height=600px,toolbar=yes,location=yes,menubar=yes');
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

    //reset check
    $("#reset").click(function () {
      chrome.storage.sync.set({
            "userselected": "5","textselected":"5",
			}, function() {
				console.log("ok");
			});
    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var activeTab = tabs[0];
		    chrome.tabs.sendMessage(activeTab.id, {"message": "reset"});
    });
      document.location= "http://localhost/training-php/reset.php?list"
    });
    //stop check
    $("#stop").click(function () {
        $.ajax({
            url: "http://localhost/training-php/autocheck.php",
             context: document.body,
              success: function(s,x){
            $(this).html(s);
              }
          });
    });
}); //end document ready
