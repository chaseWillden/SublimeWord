import Dispatcher from './Dispatcher'
import {
	SET_BODY
} from './Constants'

let _body = []

class BodyActions{

	static setBody(body){
		_body = body;
		Dispatcher.Set(SET_BODY, _body);
	}

	static getBody(callback){
		Dispatcher.Listen(SET_BODY, callback);
		callback(_body);
	}

	static addToLastBody(node){
		if (_body.length === 0) {
			_body.push(node)
		}
		else {
			_body[_body.length - 1].text = node.text;
		}
		Dispatcher.Set(SET_BODY, _body);
	}

	static appendToBody(node){
		_body.push(node);
		Dispatcher.Set(SET_BODY, _body);
	}
}

export default BodyActions