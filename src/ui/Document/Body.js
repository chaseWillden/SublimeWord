import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'
import FormatActions from '../../Actions/FormatActions'
import {getFormats} from './Style'
import Text from './Text'

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
						<Text formats={formats} id={val.id}>
							{val.text}
						</Text>
					</div>
				))}
			</span>
		);
	}
}

export default Body;