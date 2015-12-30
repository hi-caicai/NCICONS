var request = require('request');
var cheerio = require('cheerio');
var website = [
	'http://iconstore.co/',
];


var fs = require('fs');

var parseIcon = function(html) {
	//console.log(html);
	$ = cheerio.load(html);
	var icons = [];
	var nodes = $('.icon-packs li');
	nodes.each(function(index, item) {
		//console.log(item);
		var img = $(item).find('img');
		var icon = {
			'img': '',
			'title': '',
			'url': '',
		};


		var link = $(item).find ('a');
		icon.img = img.attr('src');
		icon.title = img.attr('title');
		icon.url = link.attr('href');
		icons.push(icon);
	});
	return icons;
	//console.log(nodes);
}

//var iconList = parseIcon(fs.readFileSync('iconstore.html').toString());
//console.log(iconList);

function storeIcons(icons) {

	var AV = require('avoscloud-sdk');
	AV.initialize('17gDdI1zQ01B09yvydyOl6xx-gzGzoHsz', 'noCf71OYtF1WFTrRsp8VkLxv');
	console.log('total icons : ' + icons.length);
	icons.forEach(function(item) {

		var icon_get = AV.Object.extend('icon_get');
		var iconDo = new icon_get();
		iconDo.set('img', item.img);
		iconDo.set('title', item.title);
		iconDo.set('url', item.url);
		iconDo.save();	
	});

}

/**
 * @param {Array} urls
 */
function iconSpider(urls) {
	urls.forEach(function(item, index){
		console.log('process : %s %s', index, item);
		request(item, function(error,response,body){
			console.log(response.statusCode);
			if (!error && response.statusCode == 200) {
				console.log("====");
				var icons = parseIcon(body);
				storeIcons(icons);
			}
		});
	});
}

iconSpider(website);

//storeIcons(iconList);


