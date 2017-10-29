import Dispatcher from './Dispatcher'
import {
	SET_INPUT,
	SHOULD_IGNORE_INPUT
} from './Constants'

let _input = ''
let _ignore = false

class InputActions {
	static setInput(val){
		if (_ignore) return;
		_input = val;
		Dispatcher.Set(SET_INPUT, _input);
	}

	static getInput(callback){
		Dispatcher.Listen(SET_INPUT, callback);
		callback(_input);
	}

	static shouldIgnore(val){
		_ignore = val;
		Dispatcher.Set(SHOULD_IGNORE_INPUT, val);
	}

	static getShouldIgnore(callback){
		Dispatcher.Listen(SHOULD_IGNORE_INPUT, callback);
		callback(_ignore);
	}
}

export default InputActions