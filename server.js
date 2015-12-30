var express = require('express')
var app = express()
var nunjucks = require('nunjucks');
var data = require('./data/data');
app.use(express.static('public'));
app.get('/', function (req, res) {
  data.getIconList(function(results){
		var iconList = [];
		for (var i = 0; i < results.length; i++) {
      		var icon = {};
      		var dataObject = results[i];
      		icon.title = dataObject.get("title");
      		icon.picUrl = dataObject.get("img");
          icon.downloadUrl = dataObject.get("url");
            //console.log(object);
            iconList.push(icon);

         }
         console.log(iconList);
         html = nunjucks.render('index.html', {
         	'iconList' : iconList,
		 });
  		 //this.body = html;
  		 res.send(html);

	});
});

app.get('/detail', function(req, res) {

	res.send("heeheee")

});
//app.listen(4000);
module.exports = app;
 
