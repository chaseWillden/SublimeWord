var fs = require('fs');

window.saveFile = function(name, contents){
	fs.writeFileSync(name, contents);
}

window.getCache = function(name){
	return fs.readFileSync(name, 'utf8');
}