
function checkauto() {
	chrome.storage.sync.get(["userselected"], function(result) {
		$('input[type=text]').val(result["userselected"]);
		$('button[type=submit]').click();
	});	
}
