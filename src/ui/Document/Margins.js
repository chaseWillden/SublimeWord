import {RegisterActions} from '../CommandPallette/Actions'
import AlertActions from '../../Actions/AlertActions'
import DocumentActions from '../../Actions/DocumentActions'
import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

let _position = null;
let _value = '';

const submit = (e) => {
	e.preventDefault();
	DocumentActions.setMargin(_position, parseInt(_value, 10));
	AlertActions.showAlert(null);
}

class Margins extends Component{

	state = {
		value: _value
	}

	render(){
		const {position} = this.props;
		_position = position;

		return (
			<form onSubmit={submit}>
				<TextField 
					label={`Margin ${position}`}
					value={this.state.value}
					onChange={e => {
						this.setState({value: e.target.value});
						_value = e.target.value;
					}}
					style={{minWidth: 400}}
					autoFocus
				/>
			</form>
		);	
	}
}

Margins.defaultProps = {
	position: 'Top'
}

const Btn = props => (
	<Button onClick={submit} color="primary">Save</Button>
)

const ChangeMargin = (position) => {
	AlertActions.showAlert(
		'Change the Document\'s ' + position + ' Margin', 
		<Margins position={position} />, 
		<Btn />
	);
}

RegisterActions('Set Document Margin Left', ChangeMargin.bind(this, 'Left'))
RegisterActions('Set Document Margin Right', ChangeMargin.bind(this, 'Right'))
RegisterActions('Set Document Margin Top', ChangeMargin.bind(this, 'Top'))
RegisterActions('Set Document Margin Bottom', ChangeMargin.bind(this, 'Bottom'))
RegisterActions('Reset Document Margins', () => {
	DocumentActions.resetMargins();
})