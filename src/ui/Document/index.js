import React, {Component} from 'react'
import {withStyles} from 'material-ui'
import Paper from 'material-ui/Paper'
import DocumentActions from '../../Actions/DocumentActions'
import Body from './Body'
require('./Title');
require('./Margins');

const styles = theme => ({
	root: {
		width: 816,
		height: 1056,
		margin: '0 auto',
		marginTop: 120,
		color: 'black',
		display: 'flex',
		position: 'relative',
		zIndex: 10
	},
	margins: {
		width: '100%'
	}
});

class Document extends Component{

	state = {
		marginTop: 96,
		marginBottom: 96,
		marginLeft: 51,
		marginRight: 51
	}

	componentWillMount(){
		DocumentActions.getMargins(margins => {
			this.setState({
				marginTop: margins.top,
				marginBottom: margins.bottom,
				marginLeft: margins.left,
				marginRight: margins.right
			});
		});
	}

	render(){
		const {classes} = this.props;
		const {marginLeft, marginTop, marginRight, marginBottom} = this.state;
		const style = {
			marginTop: marginTop,
			marginBottom: marginBottom,
			marginLeft: marginLeft,
			marginRight: marginRight
		};

		return (
			<Paper className={classes.root} elevation={4}>
				<div className={classes.margins} style={style}>
					<Body />
				</div>
			</Paper>
		);
	}
}

export default withStyles(styles)(Document);