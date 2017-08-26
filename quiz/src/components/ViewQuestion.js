import React from 'react';

function ViewQuestion(props) {
	let doAnswer = (qid) => {
		// send answer to firebase
		let name = props.name;
		let db = window.firebase.database();
		let index = props.party.indexOf( props.party.find( x => x.name === props.name ) );
		if( index < 0 ) index = props.party.length;
		db.ref('user-david/participants/'+index+'/').set({ name, answer: qid+1 });
	}
	const options = props.q.options.map( (op, i) => (
		<li key={op+i}>
			<label>
				<input type="radio"
					name="q"
					onClick={() => doAnswer(i)}
					value={i+1}
					disabled={!props.name} />
				{op}
			</label>
		</li>
	) );
	return (
		<div>
			{props.q.title} <br/>
			<ol>
				{options}
			</ol>
		</div>
	)
}

export default ViewQuestion;