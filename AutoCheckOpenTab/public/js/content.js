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
	chrome.storage.sync.get(["userselected","textselected"], function(result) {
		$('input[type=username]').val(result["userselected"]);
		$('input[type=text]').val(result["textselected"]);	
	});
	
}