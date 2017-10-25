import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'
import FormatActions from '../../Actions/FormatActions'

const fixText = text => {
	text = text
		.replace(/ /g, "\u00a0") // spaces

	let split = text.split(/\n/g);
	if (split.length === 1) return split[0];
	let results = [];
	for (var i = 0; i < split.length; i++){
		if (split[i].length > 0){
			results.push(<span key={i}>{split[i]}</span>);
		}
		if (i < split.length - 1){
			results.push(<br key={i} />);
		}
	}
	return results;
}

const getFormats = (formats, obj) => {
	let name = obj.format;
	if (!formats[name]) return Object.assign({}, obj.style);
	return Object.assign(formats[name], obj.style);
}

const Text = props => {
	const {children, formats, style} = props;
	if (typeof children === 'string') return <span style={style}>{fixText(props.children)}</span>;

	return children.map((val, idx) => (
		<Text style={getFormats(formats, val)} key={idx}>
			{fixText(val.text)}
		</Text>
	));
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

	render(){
		const {body, formats} = this.state;

		return (
			<span>
				{body.map((val, idx) => (
					<div style={getFormats(formats, val)} key={idx}>
						<Text formats={formats}>
							{val.text}
						</Text>
					</div>
				))}
			</span>
		);
	}
}

export default Body;