let _actions = {};

class Dispatcher{
	static Set(action, value){
		if (!_actions[action]) return;
		let actions = _actions[action];
		for (var i = 0; i < actions.length; i++){
			actions[i].callback(value);
		}
	}

	static Listen(action, callback){
		if (!_actions[action]) _actions[action] = [];

		// Prevent stack from getting massive
		var err = new Error();
		let name = err.stack.split(/\n/g)[3];

		let actions = _actions[action];
		for (var i = 0; i < actions.length; i++){
			if (actions[i].name === name) return;
		}

		_actions[action].push({
			name: name,
			callback: callback
		});
	}
}

export default Dispatcher;