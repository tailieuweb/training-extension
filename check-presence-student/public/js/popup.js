//Sử lý sự kiện click
$(document).ready(function () {
	$('#save').click(function(){
        // alert($('#save').html());
		if ($('#save').html() == 'OK') {
			$('#save').html('Send Ok');
            $('#save').attr('disabled', "true");
            $('#inputuser').val('');
		}
	});
});