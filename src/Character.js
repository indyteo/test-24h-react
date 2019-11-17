import React from 'react';

class Character extends React.Component {
	render() {
		return (
			<div className="character">
				<h2>{this.props.nom}</h2>
				<p>Âge : {this.props.age} an{this.props.age === 1 ? "" : "s"}</p>
			</div>
		);
	}
}

export default Character;