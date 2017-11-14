import BodyActions from '../../../Actions/BodyActions'
require('./Bold.js');

export const addStyle = (style) => {
	let node = {
		style: style,
		text: '',
		format: 'Inline'
	};
	BodyActions.appendToBody(node);
};

export const getFormats = (formats, obj) => {
	let name = obj.format;
	if (!formats[name]) return Object.assign({}, obj.style);
	return Object.assign({}, formats[name], obj.style);
}