import {RegisterActions, UnregisterAction} from '../CommandPallette/Actions'
import BodyActions from '../../Actions/BodyActions'

const addStyle = (style) => {
	let node = {
		style: style,
		text: ''
	};
	BodyActions.appendToBody(node);
};

let _isBold = false;
let _boldName = 'Bold Text';
const boldCallback = () => {
	_isBold = !_isBold;
	addStyle({fontWeight: _isBold ? 'bold' : 'normal'});
}

RegisterActions(_boldName, boldCallback);

export const getFormats = (formats, obj) => {
	let name = obj.format;
	if (!formats[name]) return Object.assign({}, obj.style);
	return Object.assign({}, formats[name], obj.style);
}