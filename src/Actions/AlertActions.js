import Dispatcher from './Dispatcher'
import {SHOW_ALERT} from './Constants'

class AlertActions{
	static showAlert(title, body, actions){
		let obj = {title: title, body: body, actions: actions};
		Dispatcher.Set(SHOW_ALERT, title === null ? null : obj);
	}

	static getShowAlert(callback){
		Dispatcher.Listen(SHOW_ALERT, callback);
	}
}

export default AlertActions