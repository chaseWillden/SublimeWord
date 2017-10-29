import DocumentActions from '../Actions/DocumentActions'
import BodyActions from '../Actions/BodyActions'

let cacheName = '.$tempfile.subw';

let File = {
	title: '',
	margins: {},
	body: []
};

const setProp = (name, value) => {
	File[name] = value;
	window.saveFile(cacheName, JSON.stringify(File, null, '  '));
}

// Load the init file
const LoadFileParts = () => {
	DocumentActions.setTitle(File.title);
	DocumentActions.setMargins(File.margins);
	BodyActions.setBody(File.body);
}

// Load the cache
let cache = window.getCache(cacheName);
if (cache && cache.length > 0){
	try {
		File = JSON.parse(cache);
		LoadFileParts();
	}
	catch(e) {}
}

// Listeners for file saves
DocumentActions.getTitle(title => setProp('title', title));
DocumentActions.getMargins(margins => setProp('margins', margins));
BodyActions.getBody(body => setProp('body', body));