import Dispatcher from './Dispatcher'
import {SET_TITLE, SET_MARGIN} from './Constants'

let _defaultMargins = {
	left: 51,
	right: 51,
	top: 96,
	bottom: 96
}

let _document = {
	title: '*Untitled Document',
	margins: {
		left: 51,
		right: 51,
		top: 96,
		bottom: 96
	}
};

class DocumentActions{
	static setTitle(title){
		_document.title = title;
		Dispatcher.Set(SET_TITLE, title);
	}

	static getTitle(callback){
		Dispatcher.Listen(SET_TITLE, callback);
		callback(_document.title);
	}

	static setMargin(position, value){
		_document.margins[position.toLowerCase()] = value;
		Dispatcher.Set(SET_MARGIN, _document.margins);
	}

	static getMargins(callback){
		Dispatcher.Listen(SET_MARGIN, callback);
		callback(_document.margins);
	}

	static resetMargins(){
		_document.margins = Object.assign({}, _defaultMargins);
		Dispatcher.Set(SET_MARGIN, _defaultMargins);
	}
}

export default DocumentActions