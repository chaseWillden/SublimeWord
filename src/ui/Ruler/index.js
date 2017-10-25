import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'
import {withStyles} from 'material-ui'

const INCH = 96;
const EIGTH = INCH / 8
const mist = 'rgba(255, 255, 255, .7)'

const styles = theme => ({
	ruler: {
		margin: '0 auto',
		marginTop: -70,
		position: 'absolute',
		left: '50%',
		zIndex: 1
	},
	tick: {
		borderLeft: 'solid 1px ' + mist,
		width: EIGTH - 2,
		height: 3,
		display: 'inline-block',
		marginLeft: 1,
		fontWeight: 100,
		'&:nth-child(4n)': {
			height: 7
		},
		'&:nth-child(8n)': {
			borderLeft: 'none',
			marginLeft: -3,
			width: 15,
			color: mist
		}
	}
});

class Ruler extends Component{

	state = {
		width: -1,
		margins: {}
	}

	componentWillMount(){
		DocumentActions.getWidth(width => this.setState({width: width}));
		DocumentActions.getMargins(margins => this.setState({margins: margins}));
	}

	render(){
		const {classes} = this.props;
		const {width} = this.state;
		const style = {
			width: width,
			marginLeft: -((width / 2)) + 5
		};

		const ticks = Math.ceil(width / EIGTH);
		let tickEles = [];
		let inch = 1;
		for (var i = 0; i < ticks; i++){
			tickEles.push(
				<span className={classes.tick + ' noselect'} key={i}>{(i + 1) % 8 === 0 ? inch++ : ''}</span>
			);
		}

		return (
			<div className={classes.ruler} style={Object.assign({marginTop: 0}, style)}>
				<div className={classes.ruler + ' first-tick'} style={style}>
					{tickEles}
				</div>
			</div>
		)
	}
};

export default withStyles(styles)(Ruler);