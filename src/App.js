import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
	state = {
		contenu: <Form app={this} />
	};
	
	render() {
		return (
			<div className="App">
				<main>
					<h1>Formulaire de participation aux 24h</h1>
					{this.state.contenu}
				</main>
			</div>
		);
	}
}

export default App;
