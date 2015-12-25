window.webContents.on('will-download', function(event, url, filename, mimeType, userGesture) {
  event.preventDefault();
  require('request')(url, function(data) {
    require('fs').writeFileSync('/somewhere', data);
  });
});