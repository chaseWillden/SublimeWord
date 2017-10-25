import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'
import FormatActions from '../../Actions/FormatActions'

const fixText = text => {
	return text
		.replace(/ /g, "\u00a0"); // spaces
}

class Body extends Component{

	state = {
		body: [],
		formats: {}
	}

	componentWillMount(){
		FormatActions.getFormats(formats => this.setState({formats: formats}));
		DocumentActions.getDocument(doc => this.setState({body: doc}));
	}

	getFormat(name){
		console.log(this.state.formats);
		if (!this.state.formats[name]) return {};
		return this.state.formats[name];
	}

	render(){
		const {body} = this.state;

		return (
			<span>
				{body.map((val, idx) => (
					<div style={this.getFormat(val.format)} key={idx}>{fixText(val.text)}</div>
				))}
			</span>
		);
	}
}

export default Body;