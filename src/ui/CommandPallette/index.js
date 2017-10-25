import React, {Component} from 'react'
import {withStyles} from 'material-ui'
import Paper from 'material-ui/Paper'
import {grey} from 'material-ui/colors'
import RegisterShortcut from '../../Common/Shortcuts'
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import {FindActions, GetActions, Keys} from './Actions'

const styles = theme => ({
	root: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	paper: {
		width: 500,
		height: 40,
		position: 'fixed',
		top: 100,
		left: '50%',
		marginLeft: '-250px',
		color: 'black'
	},
	input: {
		display: 'block',
		width: '100%',
		outline: 'none',
		height: 40,
		fontSize: 22,
		paddingLeft: 10,
		boxSizing: 'border-box',
		border: 'none'
	},
	results: {
		backgroundColor: 'white',
		marginTop: 10,
		width: 500
	},
	selected: {
		backgroundColor: grey[300]
	}
})

const Results = props => {
	const {classes, items, selected, onSelect} = props;
	return (
		<Paper className={classes.results} elevation={15}>
			<List dense={true}>
				{items.map((item, idx) => (
					<ListItem button key={idx} className={selected === idx ? classes.selected : ''} onClick={() => onSelect(idx)}>
						<ListItemText
			        primary={item.title}
			      />
					</ListItem>
				))}				
			</List>
		</Paper>
	);
};

class CommandPallette extends Component{
	
	state = {
		input: '',
		results: GetActions(),
		show: true,
		selected: 0
	}

	componentWillMount(){
		RegisterShortcut('cmd+shift+p', this.toggle.bind(this));
	}

	toggle(){
		this.setState({show: !this.state.show, input: '', results: GetActions(), selected: 0});
	}

	handle(e){
		let actions = FindActions(e.target.value);
		this.setState({input: e.target.value, results: actions});
	}

	changeSelected(e){
		if (e.keyCode === Keys.BOTTOM){
			const {selected, results} = this.state;
			let sel = selected + 1;
			if (sel >= results.length) sel = 0;
			this.setState({selected: sel});
		}
		else if (e.keyCode === Keys.UP){
			const {selected, results} = this.state;
			let sel = selected - 1;
			if (sel < 0) sel = results.length - 1;
			this.setState({selected: sel});
		}
		else if (e.keyCode === Keys.ENTER) this.onSelect(this.state.selected);
		else if (e.keyCode === Keys.ESC) this.toggle();
	}

	onSelect(selected){
		const {results} = this.state;
		results[selected].callback();
		this.toggle();
	}

	render(){
		const {classes} = this.props;
		const {input, results, show, selected} = this.state;

		if (!show) return "";

		return (
			<div className={classes.root} onClick={e => this.setState({show: false})}>	
				<Paper elevation={15} className={classes.paper} onClick={e => e.stopPropagation()}>
					<input type='text' className={classes.input} autoFocus value={input} onChange={this.handle.bind(this)} placeholder='cmd+shift+p' onKeyUp={this.changeSelected.bind(this)} />
					<Results classes={classes} items={results} selected={selected} onSelect={this.onSelect.bind(this)} />
				</Paper>
			</div>	
		);
	}
}

export default withStyles(styles)(CommandPallette);