
$(document).ready(function () {
	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResqonse
	) {
		if (request.message === "start") {
			load_presence();
		}
		if (request.message === "clean") {
			console.log('clean');
			clean_status();
		}
	});
});

function load_presence() {

	var get_mssv_server;

	chrome.storage.sync.get(["list_online"], function (result) {

		//Attribute Starts With Selector: https://api.jquery.com/attribute-starts-with-selector/
		var total_user_server = $('[id^="grvListStudents_lblStudentID_"]').length;

		/*save list mssv from "main server online presence" to chrome storage*/
		for (var i = 0; i < total_user_server; i++) {
			if ($('#grvListStudents_lblStudentID_' + i)) {
				get_mssv_server = $('#grvListStudents_lblStudentID_' + i).html();
				var get_list = result['list_online'];
				get_list['mssv_user'].push(get_mssv_server);
				chrome.storage.sync.set({
					"list_online": get_list
				});
			} else;
		}

		var list_user_server = result['list_online'];
		console.log("so user tren server: " + total_user_server + ", " + list_user_server['mssv_user'].length);

		/* Test mssv users post up and auto-fill tabs */
		chrome.storage.sync.get(["list"], function (result_sync) {
			var list_user_presenced = result_sync['list'];
			console.log(list_user_presenced['mssv']);
			console.log(list_user_server['mssv_user']);

			for (let i = 0; i < list_user_server['mssv_user'].length; i++) {
				if (jQuery.inArray(list_user_server['mssv_user'][i], list_user_presenced['mssv']) !== -1) {
					$('#grvListStudents_txtVangCP_' + i).val(0);
				} else {
					$('#inputnumber' + i).val(5);
					$('#grvListStudents_txtVangKP_' + i).val(5);
				}
			}
		});
	});
}

function clean_status() {
	var total_user_server = $('[id^="grvListStudents_lblStudentID_"]').length;
	for (var i = 0; i < total_user_server; i++) {
		$('#grvListStudents_txtVangCP_' + i).val("");
		$('#inputnumber' + i).val("");
		$('#grvListStudents_txtVangKP_' + i).val("");
	}
}