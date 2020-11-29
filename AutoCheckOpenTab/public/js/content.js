$(document).ready(function(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse){
			if(request.message === 'start'){
				check();
			}
			else if(request.message === 'reset'){
				reset();
			}
		});
});


function reset() {
	chrome.storage.sync.get(["userselected","textselected"], function(result) {
		$('input[type=username]').val(result["userselected"]);
		$('input[type=text]').val(result["textselected"]);	
	});
	
	
}
function check() {
	chrome.storage.sync.get(["userselected","textselected"], function(result) {
		$('input[type=username]').val(result["userselected"]);
		$('input[type=text]').val(result["textselected"]);	
	});
	location.open()
	
}