var request = require('request');

// request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
// 	if(error){
// 		return console.log('Error: ', error);
// 	}
// 	if(response.statusCode !== 200){
// 		return console.log('Invalid Status Code Returned: ', response.statusCode);
// 	}

// 	console.log(body);

// });

request({
	url: 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
	qs: {name: 'color name', hex: 'hex', rgb: 'rgb'},
	method: 'POST', 
	json: {
		name: 'data',
		hex: 'data',
		rgb: {}
	},
	}, function (error, response, body) {
		if(error) {
			console.log(error);
		} else {
		var colors = body;
		var colorChoice = process.argv[2];
		for (var i = 0; i < colors.length; i++) {
			if (colors[i] === colorChoice) {
				console.log(colors[i].hex);
			}
		}
	}



});

// request({
// url: 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
// qs: {name: 'name of color', hex: 'fff', rgb: '"r": 255, "g": 255, "b": 255'},
// method: 'POST',
// json: {
// name: 'data',
// hex: 'data',
// rgb: {}
// },

// }, function(error, response, body){
// if(error) {
// console.log(error);
// } 
// else {
// // console.log(body);
// var colors = body ;
// // console.log(typeof colors);
// var colorPick = process.argv[2];

// // console.log(colorPick);

// for (var i = 0; i < colors.length; i++) {
// if (colors[i].name.toUpperCase() === colorPick.toUpperCase()) {
// console.log(colors[i].name);
// console.log(colors[i].hex);
// console.log(colors[i].rgb);
// }
// }
// }
// });
