var remote = require('remote');
var app = remote.require('app');
  document.getElementById("min-btn").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.minimize(); 
  });

  document.getElementById("max-btn").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.maximize(); 
  });

  document.getElementById("close-btn").addEventListener("click", function (e) {
    app.quit();
  }); 