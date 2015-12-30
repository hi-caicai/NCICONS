var request = require('request');
var cheerio = require('cheerio');

var iconstoreForm = {
	pageNumber:1,
	style: 'all',
	category:'all',
	browse:'newest',
	newSelection:false,
	iconAuthor:'none',
	action:'loadmore'
	}

	console.log(iconstoreForm);
request.post('https://iconstore.co/wp-admin/admin-ajax.php', {form:iconstoreForm}, function(err, httpResponse, body){
 console.log(body);
});
