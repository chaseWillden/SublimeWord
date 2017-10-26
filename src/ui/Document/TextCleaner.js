import React from 'react'

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

export default fixText;