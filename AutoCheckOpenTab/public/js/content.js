$(document).ready(function(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse){
			if(request.message === 'start'){
				login();
			}
		}
	);
});
function login() {
	chrome.storage.sync.get(["userselected", "passselected"], function(result) {
		$('input[type=text]').val(result["userselected"]);
	});
	
}