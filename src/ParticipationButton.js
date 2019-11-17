import React from 'react';
import Character from './Character';
import Form from './Form';
import ajaxGet from './ajax.js';

class ParticipationButton extends React.Component {
	state = {
		texte: this.props.value
	};
	
	render() {
		return (
			<button className="Button" onClick={e => this.enregistrerParticipation(e)}>{this.state.texte}</button>
		);
	}
	
	enregistrerParticipation(e) {
		this.setState({
			texte: "..."
		});
		ajaxGet("http://localhost:8000/character/" + this.props.id, pers => {
			this.setState({
				texte: "Terminé !"
			});
			pers = JSON.parse(pers);
			this.props.app.setState({
				contenu: (
					<><Character nom={pers.name} age={pers.age} />
					<button className="Button" onClick={e => this.props.app.setState({contenu: <Form app={this.props.app} />})}>Retour</button></>
				)
			});
		});
	}
}

export default ParticipationButton;

