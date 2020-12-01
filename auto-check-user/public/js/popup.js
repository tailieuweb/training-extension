//Sử lý sự kiện click
$(document).ready(function () {
	$('#load').click(function(){
        // alert($('#save').html());
		if ($('#load').html() == 'Load data') {
			$('#load').html('Load Done');
            $('#load').attr('disabled', "true");
		}
	});
});