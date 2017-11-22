import DocumentActions from '../Actions/DocumentActions'
import BodyActions from '../Actions/BodyActions'

let cacheName = '.$tempfile.subw';

let File = {
	title: '',
	margins: {},
	body: []
};

window.saveFile = window.saveFile || function(name, contents) {
	window.localStorage.setItem(name, contents);
};

window.getCache = window.getCache || function(name) {
	return window.localStorage.getItem(name);
};

const setProp = (name, value) => {
	File[name] = value;
	DocumentActions.setSavingMessage('Saving...');
	window.saveFile(cacheName, JSON.stringify(File, null, '  '));
	DocumentActions.setSavingMessage('All changes have been saved');
}

// Load the init file
const LoadFileParts = () => {
	DocumentActions.setTitle(File.title);
	DocumentActions.setMargins(File.margins);
	BodyActions.setBody(File.body);
}

// Load the cache
DocumentActions.setSavingMessage('Loading Document');
let cache = window.getCache(cacheName);
if (cache && cache.length > 0){
	try {
		File = JSON.parse(cache);
		LoadFileParts();
	}
	catch(e) {}
	DocumentActions.setSavingMessage('Document Loaded...');
}

// Listeners for file saves
DocumentActions.getTitle(title => setProp('title', title));
DocumentActions.getMargins(margins => setProp('margins', margins));
BodyActions.getBody(body => setProp('body', body));
