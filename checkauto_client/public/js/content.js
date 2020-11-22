function checkauto() {
  chrome.storage.sync.get(["userselected"], function (result) {
    $("input[type=text]").val(result["userselected"]);
    $("input[type=submit]").click();
  });
}
