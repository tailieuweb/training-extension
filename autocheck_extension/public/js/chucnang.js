
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.message === "start"){
      var mang = document.getElementsByClassName("mssv");
      for (let index = 0; index < mang.length; index++) {
          var sotiet = document.getElementById(mang[index].textContent);
          sotiet.value="5";
      }
      $.get("http://localhost/login/listsinhvien.php", function(data){
          var listSV = JSON.parse(data);
          console.log(listSV);
        listSV.forEach(element => {
            for (let index = 0; index < mang.length; index++) {
              var sotiet = document.getElementById(mang[index].textContent);
              if(mang[index].textContent == element[1])
              {
                  sotiet.value=" ";
              }
            
                
            }
        });
      });
    }
  }
);
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.message === "restar"){
      var mang = document.getElementsByClassName("mssv");
      for (let index = 0; index < mang.length; index++) {
          var sotiet = document.getElementById(mang[index].textContent);
          sotiet.value=" ";
      }
    }
  }
);
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.message === "popup"){
      window.open("diemdanh_pp.php","OpenPopup","width=800, height=400,left=100,top=100");
    }
  }
);