import React, { Component } from 'react';
import WriteQuestion from './WriteQuestion';
import Result from './Result';
import Participants from './Participants';

class Teacher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionDraft: props.questionDraft,
			currentQuestion: props.currentQuestion,
			participants: props.participants
		};
	}
	render() {
		console.log('Teacher', this.state);
		return (
			<div className="teacher">
				<h1>Lärarläge: David (TODO byta användare)</h1>
				
				<WriteQuestion draft={this.state.questionDraft} />
				<Result q={this.state.currentQuestion} party={this.state.participants} />
				<Participants party={this.state.participants} />
				
				<div>Medverkande: 25 st.<br/>
					Anna, Bengt, Cedric, Diggory, ...
				</div>

			</div>
		);
	}
}
export default Teacher;