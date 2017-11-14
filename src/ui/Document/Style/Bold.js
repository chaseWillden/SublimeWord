import {addStyle} from './'
import {RegisterActions, UnregisterAction} from '../../CommandPallette/Actions'
import BodyActions from '../../../Actions/BodyActions'

let _toggleBold = false;
const _bold = 'Bold Text';
const _unbold = 'Unbold Text';
let _mainName = _bold
let _secondaryName = _unbold

const boldCallback = () => {
	addStyle({fontWeight: _toggleBold ? 'bold' : 'normal'});
	RegisterBold(_secondaryName, _mainName);
}

const RegisterBold = (name, secondary) => {
	UnregisterAction(name);
	UnregisterAction(secondary);
	_mainName = name;
	_secondaryName = secondary;
	_toggleBold = _mainName === _bold;
	RegisterActions(_mainName, boldCallback);
}

BodyActions.getLastBlock(block => {
	if (!block || !block.style) return RegisterBold(_bold, _unbold);
	if (block.style.fontWeight === 'bold'){
		RegisterBold(_unbold, _bold);
	}
});