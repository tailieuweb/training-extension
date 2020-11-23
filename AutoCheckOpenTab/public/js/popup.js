$(document).ready(function() {
    $("#send").click(function() {
        var tabOpen = window.open("http://localhost/local/index.php", 'newtab'),
            xhr = new XMLHttpRequest();


        xhr.open("GET", 'http://localhost/local/index.php' + encodeURIComponent(url), true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                tabOpen.location = xhr.responseText;
            }
        }
        xhr.send(null);
    });
})