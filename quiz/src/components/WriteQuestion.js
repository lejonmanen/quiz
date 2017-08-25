import React, { Component } from 'react';

class WriteQuestion extends Component {
	
	render() {
		let options = this.props.draft.options.map( (o, i) => <InputOption nr={i} text={o}/> );
		return (
			<div className="question">
				<div>
					Fråga: <input type="text" value={this.props.draft.title} />
				</div>
				<div>
					Svarsalternativ: <br/>
					<span> Alternativ 1 </span> <button>ta bort</button> <br/>
					2. <input type="text" value={this.props.draft.} /> <button>Lägg till</button>
				</div>
				<div>
					<label><input type="checkbox" checked={this.props.draft.anonymousOk} />Tillåt anonyma svar</label> <br/>
					<button onClick={this.publish}>Publicera</button>
				</div>
			</div>
		);
	}
	publish(e) {
		// TODO
	}
	handleKeyUp(e) {
		draft.
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
	return (
		<input type="text" value={this.state.text} onKeyUp={(e) => this.setState({text: e.target.value})} />
	)
}


export default WriteQuestion;
