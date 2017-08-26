import React, { Component } from 'react';
import ViewQuestion from './ViewQuestion';

class Student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cq: null,
			name: null,
			party: []
		}
	}
	render() {
		const q = this.state.cq ? (<ViewQuestion q={this.state.cq} name={this.state.name} party={this.state.party} />) : (<div>Ingen aktiv fråga.</div>);
		return (
			<div className="student">
				<h1>Student</h1>
				<div>
					Vem är du?
					<input type="text" 
						onKeyUp={(e) => this.setState({name: e.target.value})} /> <br/>
				</div>
				<div>
					{q}
				</div>
			</div>
		)
		//<button onClick={this.registerParticipant}>Affirmative</button>
	}
	componentWillMount() {
		let db = window.firebase.database();
		db.ref('user-david/currentQuestion').on('value', (snapshot) => {
			let value = snapshot.val();
			this.setState({ cq: value })
		});
		db.ref('user-david/participants').on('value', (snapshot) => {
			let value = snapshot.val();
			this.setState({ party: value || [] })
		});
	}
	registerParticipant = (e) => {
		let db = window.firebase.database();
		let party = this.state.party.filter( p => p.name !== this.state.name );
		party.push( { name: this.state.name, answer: 0 } );
		db.ref('user-david/').update({
			participants: party
		})
	}
}

export default Student;