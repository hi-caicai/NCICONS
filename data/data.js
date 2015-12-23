var AV = require('avoscloud-sdk');
AV.initialize('17gDdI1zQ01B09yvydyOl6xx-gzGzoHsz', 'noCf71OYtF1WFTrRsp8VkLxv');

var IconsList = AV.Object.extend('IconsList');
var query = new AV.Query(IconsList);
query.equalTo('title');
query.equalTo('pic_url');
query.equalTo('download_url');

query.find({
  success: function(results) {
    console.log('Successfully retrieved ' + results.length + ' posts.');
    // 处理返回的结果数据
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.get('title'),object.get('pic_url'),object.get('download_url'));
      document.getElementsByClassName('photo').innerHTML=object.get('pic_url');
      //('#@3').innerHTML = 
    }

  },
  error: function(error) {
    console.log('Error: ' + error.code + ' ' + error.message);
  }
});