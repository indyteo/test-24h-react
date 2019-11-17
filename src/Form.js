import React from 'react';
import ParticipationButton from './ParticipationButton';

class Form extends React.Component {
	state = {
		id: 0
	};
	
	render() {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<label htmlFor="id">ID de la personne qui participe : </label>
				<input id="id" name="id" type="number" min="1" max="1000" onChange={e => this.saveId(e)} autoFocus required />
				<br />
				<ParticipationButton value="Je veux participer !" id={this.state.id} app={this.props.app} />
			</form>
		);
	}
	
	saveId(e) {
		var id = e.target.value;
		this.setState({
			id: id >= 0 && id <= 1000 && id !== "" ? id : 0
		});
	}
}

export default Form;