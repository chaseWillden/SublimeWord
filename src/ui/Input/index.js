import React, {Component} from 'react'
import {withStyles} from 'material-ui';
import InputActions from '../../Actions/InputActions'

const styles = theme => ({
	root: {
		width: 0,
		height: 0,
		outline: 'none',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: -1
	}
})

class Input extends Component{

	state = {
		value: '',
		ignore: false
	}

	componentDidMount(){
		InputActions.getShouldIgnore(ignore => {
			this.ele.focus();
			this.setState({ignore: ignore})
		});
	}

	handleChange(e){
		this.setState({value: e.target.value});
		InputActions.setInput(e.target.value);
	}

	focus(e){
		if (this.state.ignore) return;
		e.target.focus();
	}

	render(){
		const {classes} = this.props;
		return (
			<input 
				type='text' 
				value={this.state.value} 
				onChange={this.handleChange.bind(this)} 
				className={classes.root} 
				autoFocus
				ref={ele => this.ele = ele}
				onBlur={this.focus.bind(this)} // always on autoFocus
			/>
		);		
	}
}

export default withStyles(styles)(Input);