import React, { Component } from 'react';
import ViewQuestion from './ViewQuestion';

class Student extends Component {
	render() {
		const q = this.props.currentQuestion ? (<ViewQuestion q={this.props.currentQuestion}/>) : (<div>Ingen aktiv fråga.</div>);
		return (
			<div className="student">
				<div>
					Vem är du?
					<input type="text" 
						onKeyUp={(e) => this.setState({name: e.target.value})} /> <br/>
					<button onClick={() => this.props.registerParticipant(this.state.name)}>Affirmative</button>
				</div>
				<div>
					{q}
				</div>
			</div>
		)
	}
}

export default Student;