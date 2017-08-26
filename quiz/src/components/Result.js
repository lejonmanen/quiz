import React from 'react';
//import WriteQuestion from './WriteQuestion';

function Result(props) {
	console.log('Result:', props.q);
	if( !props.q ) {
		return <div>Ingen aktiv fråga.</div>;
	}
	//const answers = props.party.map( o => o.answer )
	//	.sort().filter( (a, i, list) => list.indexOf(a) === i );
	//let numParticipants = answers.length;
	console.log('Result party:', props.party);
	let numAnswers = props.party.reduce( (prev, cur) => cur.answer > 0 ? 1 : 0, 0 );
	console.log('Result num:', numAnswers);
	const options = props.q.options.map( (op, i) => 
		(<li key={op+i} > {op}: {props.party.reduce( (prev, cur) => cur === i ? 1 : 0, 0 )} röster, {Math.round(props.party.reduce( (prev, cur) => cur === i ? 1 : 0, 0 ) / Math.max(numAnswers, 1)*100)}% </li>) );
	return (
		<div>
			Resultat: <br/>
			<ol>
				{options}
			</ol>
		</div>
	);
}
export default Result;