import Dispatcher from './Dispatcher'
import {
	SET_TITLE, 
	SET_MARGIN, 
	SET_DOCUMENT_WIDTH,
	SET_DOCUMENT
} from './Constants'

let _defaultMargins = {
	left: 96,
	right: 96,
	top: 96,
	bottom: 96
}

let _document = {
	title: '*Untitled Document',
	margins: {
		left: 96,
		right: 96,
		top: 96,
		bottom: 96
	},
	width: 816,
	doc: [
		{ // each top level element is a row
			format: 'Title',
			text: 'Sublime Word'
		},
		{
			format: 'Paragraph',
			text: 'Sublime text is a new, smooth and modern word processor designed by programmers for '
		},
		{
			format: 'Paragraph',
			text: 'programmers. The rendering engine is  built from the ground up using modern technologies'
		},
		{
			format: 'Paragraph',
			text: 'like React, Electron, and other libraries.'
		},
		{
			format: 'LineBreak',
			text: '\n'
		},
		{
			format: 'Paragraph',
			text: [
				{
					format: 'Paragraph',
					text: 'Just like any word processor, Sublime Word can format '
				}, 
				{
					format: 'Custom',
					text: 'text inline',
					style: {
						textDecoration: 'underline',
						fontWeight: 'bold'
					}
				},
				{
					format: 'Paragraph',
					text: ' and go back to normal'
				}
			]
		}
	]
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

	static getWidth(callback){
		Dispatcher.Listen(SET_DOCUMENT_WIDTH, callback);
		callback(_document.width);
	}

	static setDocument(doc){
		_document.doc = doc;
		Dispatcher.Set(SET_DOCUMENT, doc);
	}

	static getDocument(callback){
		Dispatcher.Listen(SET_DOCUMENT, callback);
		callback(_document.doc);
	}
}

export default DocumentActions