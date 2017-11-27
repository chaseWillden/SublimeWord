if (typeof require === 'function') {
	try {

		var fs = require('fs');

		window.saveFile = function(name, contents){
			fs.writeFileSync(name, contents);
		};

		window.getCache = function(name){
			return fs.readFileSync(name, 'utf8');
		};

	} catch (err) { console.warn(err); }
} else { console.info('Running in browser mode.'); }
