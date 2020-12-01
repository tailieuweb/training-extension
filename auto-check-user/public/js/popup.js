$(document).ready(function () {
  /*the first load database to extension */
  $.ajax({
    //create an ajax request to display.php
    type: "GET",
    url: "http://localhost/php-training/for-extension/auto-check-presence.php",
    dataType: "html", //expect html to be returned
    success: function (response) {
      $("#responsecontainer").html(response);
      //alert(response);
    },
  });
  /*-------------------------------------------*/

  /* re-initialize storage mssv every time it is loaded*/
  chrome.storage.sync.get(function () {
    user = { mssv: [] };
    chrome.storage.sync.set({
      list: user,
    });
  });
  chrome.storage.sync.get(["list"], function (result) {
    console.log(result["list"]["mssv"]);
  });
  /*-------------------------------------------*/

  /* initialize storage for the list presence */
  chrome.storage.sync.get(function () {
    user = { mssv_user: [] };
    chrome.storage.sync.set({
      list_online: user,
    });
  });
  chrome.storage.sync.get(["list_online"], function (result) {
    console.log(result["list_online"]["mssv_user"]);
  });
  /*-------------------------------------------*/

  /* event handling click load button */
  $("#load").click(function () {
    // alert($('#save').html());
    if ($("#load").html() == "Load data") {
      $("#load").html("Load Done");
      $("#load").attr("disabled", "true");
    }
  });

  $("#load").click(function () {
    list_user_presenced();
    $("#clean").show();
    //Use the chrome.tabs API to interact with the browser's tab system
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "start" });
    });
  });
  /*-------------------------------------------*/

  /* event handling click clean button */
  $("#clean").hide();
  $("#clean").click(function () {
    $("#load").hide();
    $("#reload").show();
    
    $("#responsecontainer").html();
    /* load database to extension */
    $.ajax({
      //create an ajax request to display.php
      type: "GET",
      url: "http://localhost/php-training/for-extension/auto-check-presence.php",
      dataType: "html", //expect html to be returned
      success: function (response) {
        $("#responsecontainer").html(response);
        //alert(response);
      },
    });
    /*-------------------------------------------*/
    chrome.storage.sync.get(function () {
      user = { mssv: [] };
      chrome.storage.sync.set({
        list: user,
      });
    });

    //Use the chrome.tabs API to interact with the browser's tab system
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "clean" });
    });
  });
  /*-------------------------------------------*/

  /* event handling click reload button */
  $("#reload").hide();
  $("#reload").click(function () {
    /* load database to extension */
    $.ajax({
      //create an ajax request to display.php
      type: "GET",
      url: "http://localhost/php-training/for-extension/auto-check-presence.php",
      dataType: "html", //expect html to be returned
      success: function (response) {
        $("#responsecontainer").html(response);
        //alert(response);
      },
    });
    /*-------------------------------------------*/
    chrome.storage.sync.get(function () {
      user = { mssv: [] };
      chrome.storage.sync.set({
        list: user,
      });
    });
    list_user_presenced();
    //Use the chrome.tabs API to interact with the browser's tab system
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "reload" });
    });
  });
});

function list_user_presenced() {
  // console.log($('#mssv_user2').val());

  var get_input_mssv;

  var total_user_mssv = $("#total_user_mssv").val();
  console.log(total_user_mssv);

  //show data storage : https://chrome.google.com/webstore/detail/storage-area-explorer/ocfjjjjhkpapocigimmppepjgfdecjkb
  //save list mssv from server file to chrome storage
  chrome.storage.sync.get(["list"], function (result) {
    for (var i = 1; i <= total_user_mssv; i++) {
      if ($("#inlineCheckbox" + i).is(":checked") == true) {
        get_input_mssv = $("#mssv_user" + i).val();
        var get_list = result["list"];
        get_list["mssv"].push(get_input_mssv);
        chrome.storage.sync.set({
          list: get_list,
        });
      }
    }
    console.log(result["list"]);
  });
}