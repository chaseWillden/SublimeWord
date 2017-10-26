import {RegisterActions} from '../CommandPallette/Actions'
import SelectionActions from '../../Actions/SelectionActions'

const addStyle = () => {
	alert(_text);
};	

let _text = '';

SelectionActions.getSelectedText(data => {
	_text = data.text;
});

RegisterActions('Bold Selection', addStyle);

export const getFormats = (formats, obj) => {
	let name = obj.format;
	if (!formats[name]) return Object.assign({}, obj.style);
	return Object.assign(formats[name], obj.style);
}