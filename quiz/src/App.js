import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Teacher from './components/Teacher';
import Student from './components/Student';
//exec('wget https://www.gstatic.com/firebasejs/4.3.0/firebase.js', function(stdout) {});

var config = {
	apiKey: "AIzaSyD4enhFP8mwvh8L-XtgbpUvPoVlAr42p2U",
	authDomain: "quiz-9a8a7.firebaseapp.com",
	databaseURL: "https://quiz-9a8a7.firebaseio.com",
	projectId: "quiz-9a8a7",
	storageBucket: "quiz-9a8a7.appspot.com",
	messagingSenderId: "176675875694"
};
window.firebase.initializeApp(config);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionDraft: null
				/*title: 'Fråga?',
				options: ['alt 1', 'alt 3'],
				anonymousOk: true
			},
			currentQuestion: null,
			participants: []*/
		};
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
		console.log('App render, currrentQ=',this.state.currentQuestion);
		return (
			<div className="App">
				<div className="App-header">
					<h1>Quiz</h1>
				</div>

				<Switch>
				<PropsRoute path='/teacher' component={Teacher}
					questionDraft={this.state.questionDraft}
					currentQuestion={this.state.currentQuestion}
					participants={this.state.participants}
					/>
				<Route path='/student/' component={Student}/>
				<Route path='/' component={Student}/>
				</Switch>

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


	componentWillMount() {
		// Initialize Firebase

	}

}

// Because we cannot send props or state directly to the Route component
const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest);
	return (
		React.createElement(component, finalProps)
	);
}

const PropsRoute = ({ component, ...rest }) => {
	return (
		<Route {...rest} render={routeProps => {
			return renderMergedProps(component, routeProps, rest);
		}}/>
	);
}


export default App;
