import React, {Component} from 'react'
import {withStyles} from 'material-ui'
import {lightBlue} from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';
import DocumentActions from '../../Actions/DocumentActions'
import SaveIcon from 'material-ui-icons/Save';
import IconButton from 'material-ui/IconButton';
import {ChangeTitleDialog} from '../Document/Title'

const styles = theme => ({
	root: {
		backgroundColor: lightBlue[800],
		height: 116,
		padding: '10px 20px',
		margin: -16,
		position: 'fixed',
		width: '100%',
		zIndex: 11
	},
	bar: {
		backgroundColor: lightBlue[800],
		height: 133,
		zIndex: 1,
		width: '100%',
		position: 'fixed',
		marginTop: 116
	},
	title: {
		color: 'white',
		display: 'inline-block',
		cursor: 'pointer'
	},
	saveButton: {
		verticalAlign: 'sub',
		marginLeft: 10,
		color: 'white'
	},
	saveIcon: {
		width: 20,
		height: 20
	},
	saveText: {
		color: 'rgba(255, 255, 255, .5)'
	}
})

class TopMenu extends Component{

	state = {
		title: ''
	}

	componentWillMount(){
		DocumentActions.getTitle(title => this.setState({title: title}));
	}

	render(){
		const {classes} = this.props;
		const {title} = this.state;

		return (
			<div>
				<div className={classes.bar} />
				<div className={classes.root}>
					<Grid container>
						<Grid item md={8}>
							<Typography type="subheading" className={classes.title} onClick={ChangeTitleDialog}>{title}</Typography>
							<IconButton className={classes.saveButton} aria-label="Save">
				        <SaveIcon className={classes.saveIcon} />
				      </IconButton>
				      <small className={classes.saveText}>All changes have been saved</small>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(TopMenu);