import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'
import FormatActions from '../../Actions/FormatActions'
import InputActions from '../../Actions/InputActions'
import BodyActions from '../../Actions/BodyActions'
import {getFormats} from './Style'
import Text from './Text'

class Body extends Component{

	state = {
		body: [],
		formats: {}
	}

	componentWillMount(){
		FormatActions.getFormats(formats => this.setState({formats: formats}));
		BodyActions.getBody(body => this.setState({body: body}));
		
		let init = true;
		InputActions.getInput(input => {
			if (init){
				init = false;
				return;
			}
			
			BodyActions.addToLastBody({
				"format": "Paragraph",
				"text": input
			})	
		});

		InputActions.getEnterPressed(() => {
			InputActions.clearInput();
			BodyActions.appendToBody({
				format: 'Paragraph',
				text: ''
			});
		});
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