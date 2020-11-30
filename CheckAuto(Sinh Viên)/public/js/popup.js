$(document).ready(function () {
	$('#autocheck').click(function () {
    	var mssv = $("#mssv").val();
		$.get('http://localhost:8080/training-extension/userlogin/autocheck.php',{mssv:mssv},function(data){
			if (data == 1) {
				$("#alert").html(
					`<div class="alert alert-success alert-dismissible fade show" role="alert">
					<span>Điểm Danh Thành Công</span>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>`
				);
			}else if(data == 0){
				$("#alert").html(
					`<div class="alert text-left alert-danger alert-dismissible fade show" role="alert">
					<span>Bạn Đã Điểm Danh Rồi <br/> (Lưu Ý: Mỗi Máy Chỉ Điểm Danh 1 Lần Trong 1 Ngày)</span>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>`
				);
			}else if(data == 2){
				$("#alert").html(
					`<div class="alert alert-danger alert-dismissible fade show" role="alert">
					<span>Nhập Sai MSSV!!! Hãy Nhập Lại</span>
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>`
				);
			}else{
				$("#alert").html(data);
			}
		});
    });
});

