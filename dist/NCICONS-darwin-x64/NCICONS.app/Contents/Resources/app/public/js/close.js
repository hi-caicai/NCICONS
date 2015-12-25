var remote = require('remote');
var app = remote.require('app'); 
  document.getElementById("close-btn").addEventListener("click", function (e) {
    app.quit();
  }); 