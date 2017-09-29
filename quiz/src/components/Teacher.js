import React, { Component } from 'react';
import WriteQuestion from './WriteQuestion';
import Result from './Result';
import Participants from './Participants';

class Teacher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionDraft: {title: '', options: [], anonymousOk: true} ,
			currentQuestion: null,
			participants: []
		};
	}
	render() {
		console.log('Teacher', this.state, '-- current question is ', this.state.currentQuestion);
		return (
			<div className="teacher">
				<h1>Lärarläge: David</h1>
				
				<WriteQuestion draft={this.state.questionDraft} />
				<Result q={this.state.currentQuestion} party={this.state.participants} />
				<Participants party={this.state.participants} />
			</div>
		);
	}
	componentWillMount() {
		let db = window.firebase.database();
		db.ref('user-david/').once('value', (snapshot) => {
			let value = snapshot.val();
			if( value )
				this.setState({
					//pastQuestions: value.pastQuestions,
					questionDraft: value.questionDraft,
					currentQuestion: value.currentQuestion,
					participants: value.participants || []
				})
			//console.log('Teacher firebase value:', value);
		});
		let iCQ=true, iQD=true, iP=true;
		db.ref('user-david/currentQuestion/').on('value', (snapshot) => {
			console.log('Teacher FB1')
			if( iCQ ) {iCQ = false; return; }
			let value = snapshot.val();
			if( value ) this.setState({ currentQuestion: value })
		});
		db.ref('user-david/questionDraft/').on('value', (snapshot) => {
			console.log('Teacher FB2')
			if( iQD ) {iQD = false; return; }
			let value = snapshot.val();
			if( value ) this.setState({ questionDraft: value })
		});
		db.ref('user-david/participants/').on('value', (snapshot) => {
			console.log('Teacher FB3')
			if( iP ) {iP = false; return; }
			let value = snapshot.val();
			if( value ) this.setState({ participants: value })
		});
	}

}
export default Teacher;