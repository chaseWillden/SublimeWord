import Dispatcher from './Dispatcher'
import {
	SET_SELECTION_START,
	SET_SELECTION_END
} from './Constants'

let _start = -1;
let _end = -1;

const getSelectedText = () => {
	if (window.getSelection){
		let range = window.getSelection();
		return range.toString();
	}
	if (document.selection.createRange){
		let range = document.selection.createRange();
		return range.text;
	}
}

class SelectionActions{
	static setStart(start){
		_start = start;
		Dispatcher.Set(SET_SELECTION_START, {start: _start, end: _end});
	}

	static setEnd(end){
		_end = end;
		Dispatcher.Set(SET_SELECTION_END, {start: _start, end: _end});
	}

	static getEnd(callback){
		Dispatcher.Listen(SET_SELECTION_END, callback);
		callback({start: _start, end: _end});
	}

	static getSelectedText(callback){
		SelectionActions.getEnd(loc => {
			loc.text = getSelectedText();
			callback(loc);
		});
	}
}

export default SelectionActions;