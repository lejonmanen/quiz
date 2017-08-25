import React, { Component } from 'react';
import './App.css';
import Teacher from './components/Teacher';
import Student from './components/Student';
//exec('wget https://www.gstatic.com/firebasejs/4.3.0/firebase.js', function(stdout) {});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionDraft: {
				title: 'heeeeej',
				options: ['alt 1', 'alt 3'],
				anonymousOk: true
			},
			currentQuestion: null,
			participants: []
		}
		/*this.state = {
			pastQuestions: [],
			questionDraft: {
				title: 'Vad?',
				options: ['option 1', 'option 2'],
				anonymousOk: true
			},
			currentQuestion: null,
			participants: [
				{name: 'Anna'},
				{name: 'Bengt', answer: 2},
				{name: 'Cedric', answer: 2},
				{name: 'Diggory', answer: 1}
			]
		}*/
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1>Quiz</h1>
				</div>

				<Teacher
					questionDraft={this.state.questionDraft}
					currentQuestion={this.state.currentQuestion}
					participants={this.state.participants}
				/>
				<hr/>
				<Student
					registerParticipant={this.registerParticipant}
					/>

			</div>
		);
		/**
				<p>
					Teacher mode: <br/>
					- write question with arbitrary number of options <br/>
					- ask question <br/>
					- view results, public or hidden <br/>
					- see participants (number or list of names) <br/>
					- choose whether to allow anonymous submissions <br/>
					- generates an "invite link"
				</p>
				<p>
					Student mode: <br/>
					- invite link
					- enter name or not <br/>
					- pick an answer on selected question
				</p>
		 */
	}
	registerParticipant(name) {
		this.setState({name: name});
	}


	componentWillMount() {
		// Initialize Firebase
		//this.firebaseRef = new Firebase("https://ReactFireTodoApp.firebaseio.com/items/");

		let db = window.firebase.database();
		db.ref('user-david/').once('value', function(snapshot) {
			// set state
			let value = snapshot.val();
			if( value )
				this.setState({
					db: db,
					pastQuestions: value.pastQuestions,
					questionDraft: value.questionDraft,
					currentQuestion: value.currentQuestion,
					participants: value.participants
				})
		});
	}

}

export default App;
