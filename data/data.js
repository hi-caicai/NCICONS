var AV = require('avoscloud-sdk');
AV.initialize('17gDdI1zQ01B09yvydyOl6xx-gzGzoHsz', 'noCf71OYtF1WFTrRsp8VkLxv');

var icon_get= AV.Object.extend('icon_get');



function getIconList(callback) {
var query = new AV.Query(icon_get);
query.equalTo('title');
query.equalTo('img');
query.equalTo('url');
query.find({
  success: function(results) {
    console.log('Successfully retrieved ' + results.length + ' posts.');
    callback(results);// 处理返回的结果数据
  },
  error: function(error) {
    console.log('Error: ' + error.code + ' ' + error.message);
  }
});
}

module.exports.getIconList = getIconList;