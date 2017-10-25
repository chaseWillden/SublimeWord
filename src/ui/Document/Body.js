import React, {Component} from 'react'
import DocumentActions from '../../Actions/DocumentActions'

class Body extends Component{

	state = {
		body: []
	}

	componentWillMount(){
		DocumentActions.getDocument(doc => this.setState({body: doc}));
	}

	render(){
		const {body} = this.state;

		return (
			<span>
				{body.map((val, idx) => (
					<span>{val.text}</span>
				))}
			</span>
		);
	}
}

export default Body;