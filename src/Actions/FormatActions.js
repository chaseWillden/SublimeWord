import Dispatcher from './Dispatcher'
import {
	SET_FORMAT
} from './Constants'

let _defaultFormats = {
	'Title': {
		fontSize: '32pt'
	}
}

class FormatActions{
	static setFormat(name, style){
		_defaultFormats[name] = Object.assign(_defaultFormats[name], style);
		Dispatcher.Set(SET_FORMAT, {name: name, style: _defaultFormats[name]});
	}

	static getFormats(callback){
		Dispatcher.Listen(SET_FORMAT, callback);
		callback(_defaultFormats);
	}
}

export default FormatActions