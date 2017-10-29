let _registered = {};

let _actions = [{
	title: 'Help'
}];

export const RegisterActions = (name, callback) => {
	_registered[name] = _actions.length;
	_actions.push({
		title: name,
		callback: callback
	});
}

export const UnregisterAction = name => {
	delete _actions[_registered[name]];
	delete _registered[name];
}

export const GetActions = () => {
	return _actions.slice(0, 5);
}

export const FindActions = name => {
	let results = [];
	for (var i = 0; i < _actions.length; i++){
		if (_actions[i].title.toLowerCase().indexOf(name.toLowerCase()) > -1){
			results.push(_actions[i]);
		}
	}
	return results.slice(0, 5);
}

export const Keys = {
	BOTTOM: 40,
	RIGHT: 39,
	UP: 38,
	LEFT: 37,
	ENTER: 13,
	ESC: 27
}