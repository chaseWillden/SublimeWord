import React from 'react'
import {withStyles} from 'material-ui';
import {grey} from 'material-ui/colors'
import Document from './Document'
import CommandPallette from './CommandPallette'
import Alert from './Alert'
import Ruler from './Ruler'
import DocumentActions from '../Actions/DocumentActions'
import TopMenu from './TopMenu'

const style = theme => ({
	root: {
		backgroundColor: grey[300],
		width: '100%',
		color: 'white',
		display: 'inline-block',
		paddingBottom: 70
	}
})

const Window = props => {
	DocumentActions.getTitle(title => document.title = title);
	
	return (
		<div className={props.classes.root}>
			<CommandPallette />
			<TopMenu />
			<Ruler />
			<Document />
			<Alert />
		</div>
	)
}

export default withStyles(style)(Window);