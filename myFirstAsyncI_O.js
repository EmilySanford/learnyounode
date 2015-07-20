var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
	var buffer = data.toString();
	var count = buffer.split('\n').length-1;
	console.log(count);
});
