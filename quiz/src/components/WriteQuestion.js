import React, { Component } from 'react';

class WriteQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.draft.title,
			options: this.props.draft.options
		}
		this.saveQuestion = this.saveQuestion.bind(this);
		this.removeQuestion = this.removeQuestion.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}	
	render() {
		//console.log('WriteQuestions options:', this.state.options);
		this.saveDraft(); // write state changes to firebase
		let options = this.state.options.map( 
			(o, i) => <InputOption key={o+i} nr={i} text={o} save={this.saveQuestion} remove={() => this.removeQuestion(i)} /> );
		return (
			<div className="question">
				<div>
					Fråga: <input type="text" value={this.state.title}
						onChange={e => this.setState({title: e.target.value})} />
				</div>
				<div>
					Svarsalternativ: <br/>
					{options}
					<button onClick={this.addOption}>Lägg till alternativ</button>
				</div>
				<div>
					<button onClick={this.publish}>Publicera</button>
					<button onClick={this.unpublish}>Ta ner</button>
				</div>
			</div>
		);
		/*<label><input type="checkbox" checked={this.props.draft.anonymousOk}
			onChange={this.handleCheck} />Tillåt anonyma svar</label> <br/>*/
	}
	addOption = () => {
		let o2 = this.state.options.filter(o => true);
		o2.push('');
		//console.log('WriteQuestion addOption', o2, 'length='+o2.length);
		this.setState({options: o2});
	}
	saveQuestion(text, num) {
		let qs = this.state.options.map( (o, i) => i===num ? text : o );
		//console.log('WriteQuestion saveQuesiton', qs);
		this.setState({ options: qs });
	}
	removeQuestion(num) {
		//console.log('WriteQuestion removeQuestion 1', this.state.options, num);
		let qs = this.state.options.filter( (o, i) => i !== num );
		//console.log('WriteQuestion removeQuestion 2', qs);
		this.setState({ options: qs });
	}
	handleCheck(e) {
		// TODO version 2
	}
	saveDraft() {
		let db = window.firebase.database();
		db.ref('user-david/questionDraft').set({
			title: this.state.title,
			options: this.state.options,
			anonymousOk: true
		});
	}
	publish = (e) => {
		console.log('Question going live...');
		let db = window.firebase.database();
		db.ref('user-david/currentQuestion').set({
			title: this.state.title,
			options: this.state.options,
			anonymousOk: true
		});
	}
	unpublish = (e) => {
		console.log('Question going live...');
		let db = window.firebase.database();
		db.ref('user-david/currentQuestion').set({});
	}
}

class InputOption extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			number: props.nr
		};
	
	}
	render() {
		return (
			<span>
			<input type="text"
				value={this.state.text}
				onChange={(e) => this.setState({text: e.target.value})}
				onBlur={() => this.props.save(this.state.text, this.state.number)}
				/>
			<button onClick={this.props.remove}>Ta bort</button>
			<br/></span>
		)
	}
}


export default WriteQuestion;
