import $ from 'jquery';

let _actions = {};

const RegisterShortcut = (key, callback) => {
	_actions[key] = callback;
};

const skip = [91, 17, 16];

$(document).keydown(e => {
	if (skip.indexOf(e.keyCode) > -1) return;
	let cmd = e.metaKey;
	let shift = e.shiftKey;
	let letter = String.fromCharCode(e.keyCode);
	for (var key in _actions){
		var split = key.split('+');
		let call = false
		for (var i = 0; i < split.length; i++){
			if (split[i] === 'cmd' && cmd) call = true;
			else if (split[i] === 'cmd') {
				call = false;
				break;
			}
			if (split[i] === 'shift' && shift) call = true;
			else if (split[i] === 'shift') {
				call = false;
				break;
			}
			if (split[i].toLowerCase() === letter.toLowerCase()) call = true;
		}

		if (call) {
			_actions[key]();
		}
	}
});

export default RegisterShortcut