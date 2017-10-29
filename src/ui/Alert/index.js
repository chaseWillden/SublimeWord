import React, {Component} from 'react'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import AlertActions from '../../Actions/AlertActions'
import InputActions from '../../Actions/InputActions'

class Alert extends Component{

	componentWillMount(){
		AlertActions.getShowAlert((obj) => {
			if (obj === null){
				this.setState({open: false});
				return;
			}
			this.setState({open: true, title: obj.title, body: obj.body, actions: obj.actions})
		});
	}
	
	state = {
    open: false,
    body: '',
    title: '',
    actions: ''
  };

  handleClickOpen = () => this.setState({ open: true });
  handleRequestClose = () => this.setState({ open: false });

	render(){
		const {open, title, body, actions} = this.state;
		InputActions.shouldIgnore(this.state.open); // disable the input

		return (
			<Dialog
		    open={open}
		    keepMounted
		    onRequestClose={this.handleRequestClose}
		  >
		    <DialogTitle>{title}</DialogTitle>
		    <DialogContent>
		      {body}
		    </DialogContent>
		    <DialogActions>
		      {actions}
		    </DialogActions>
		  </Dialog>
		);
	}
}

export default Alert