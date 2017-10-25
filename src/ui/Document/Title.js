import {RegisterActions} from '../CommandPallette/Actions'
import AlertActions from '../../Actions/AlertActions'
import DocumentActions from '../../Actions/DocumentActions'
import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

let _title = '';

const submit = (e) => {
	e.preventDefault();
	DocumentActions.setTitle(_title);
	AlertActions.showAlert(null);
}

class ChangeTitle extends Component{

	state = {
		value: _title
	}

	render(){
		return (
			<form onSubmit={submit}>
				<TextField 
					label='Document Title'
					value={this.state.value}
					onChange={e => {
						this.setState({value: e.target.value});
						_title = e.target.value;
					}}
					style={{minWidth: 400}}
					autoFocus
				/>
			</form>
		);	
	}
}

const Btn = props => (
	<Button onClick={submit} color="primary">Save</Button>
)

RegisterActions('Change the title of the document', () => {
	AlertActions.showAlert(
		'Rename the document', 
		<ChangeTitle />, 
		<Btn />
	);
});