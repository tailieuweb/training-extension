//Sử lý sự kiện click
$(document).ready(function () {
	$('#load').click(function(){
        // alert($('#load').html());
		if ($('#load').html() == 'Load data') {
			$('#load').html('Loading data.....');
            $('#load').attr('disabled', "true");
		}
	});
});