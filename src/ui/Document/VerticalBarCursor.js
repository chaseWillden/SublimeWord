import React from 'react'
import SelectionActions from '../../Actions/SelectionActions'

const RegisterMouseDown = (id, e) => {
	SelectionActions.setStart(id);
}

const RegisterMouseUp = (id, e) => {
	SelectionActions.setEnd(id);
}

const VerticalBarCursor = props => {
	const {children, style, id} = props;
	return (
		<span
			style={Object.assign({
				borderRightStyle: 'solid',
				borderRightWidth: 2,
				borderRightColor: '#000',
				paddingTop: 2,
				paddingBottom: 2
			}, style)}
			onMouseDown={RegisterMouseDown.bind(this, id)}
			onMouseUp={RegisterMouseUp.bind(this, id)}
			className='noselect cursor blink'
		>
			&nbsp;
		</span>
	);
}

export default VerticalBarCursor;
