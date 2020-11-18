function checkauto() {
  chrome.storage.sync.get(["userselected"], function (result) {
    $("input[type=text]").val(result["userselected"]);
    $("button[type=submit]").click();
  });
}
// function save() {
//   var query = $("#formId").serialize();
//   var url = "http://localhost/training-php/getdata.php";
//   $.post(url, query, function (response) {
//     alert(response);
//   });
// }

function save() {
  $.ajax({
    query: $("#formId").serialize(),
    type: "POST",
    url:
      "http://localhost/training-php/getdata.php?url=" +
      encodeURIComponent(newURL),
    data: { query, url: newURL },
    success: function (data) {
      $.post(data, function (respones) {
        alert(respones);
      });
    },
  });
}
