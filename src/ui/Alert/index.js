import React, {Component} from 'react'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import AlertActions from '../../Actions/AlertActions'

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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

	render(){
		return (
			<Dialog
		    open={this.state.open}
		    keepMounted
		    onRequestClose={this.handleRequestClose}
		  >
		    <DialogTitle>{this.state.title}</DialogTitle>
		    <DialogContent>
		      {this.state.body}
		    </DialogContent>
		    <DialogActions>
		      {this.state.actions}
		    </DialogActions>
		  </Dialog>
		);
	}
}

export default Alert