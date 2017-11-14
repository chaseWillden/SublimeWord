import React from 'react'
import SelectionActions from '../../Actions/SelectionActions'
import fixText from './TextCleaner'

const RegisterMouseDown = (id, e) => {
	SelectionActions.setStart(id);
}

const RegisterMouseUp = (id, e) => {
	SelectionActions.setEnd(id);
}

const Text = props => {
	const {children, style, id} = props;
	return (
		<span style={style} onMouseDown={RegisterMouseDown.bind(this, id)} onMouseUp={RegisterMouseUp.bind(this, id)} className='noselect text'>
			{fixText(children)}
		</span>
	);
}

export default Text;