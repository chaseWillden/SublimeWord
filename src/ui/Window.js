import React from 'react'
import {withStyles} from 'material-ui';
import {grey} from 'material-ui/colors'
import Document from './Document'
import CommandPallette from './CommandPallette'
import Alert from './Alert'
import DocumentActions from '../Actions/DocumentActions'

const style = theme => ({
	root: {
		backgroundColor: grey[300],
		width: '100%',
		color: 'white',
		display: 'inline-block'
	}
})

const Window = props => {
	DocumentActions.getTitle(title => document.title = title);
	
	return (
		<div className={props.classes.root}>
			<CommandPallette />
			<Document />
			<Alert />
		</div>
	)
}

export default withStyles(style)(Window);