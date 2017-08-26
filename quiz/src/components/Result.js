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
	const toPercent = (num, total) => Math.round(num / total * 100);
	console.log('Result party:', props.party);
	let numAnswers = props.party.reduce( (prev, cur) => prev + (cur.answer > 0 ? 1 : 0), 0 );
	console.log('Result num:', numAnswers);
	const options = props.q.options.map( (op, i) => 
		(<li key={op+i} > {op}: {props.party.reduce( (prev, cur) => prev+(cur.answer === i+1 ? 1 : 0), 0 )} röster, {toPercent(props.party.reduce( (prev, cur) => prev+(cur.answer === i+1 ? 1 : 0), 0 ), Math.max(numAnswers, 1))}% </li>) );
	return (
		<div>
			Resultat: {numAnswers} av {props.party.length} har röstat, {toPercent(numAnswers, props.party.length)}% <br/>
			<ol>
				{options}
			</ol>
		</div>
	);
}
export default Result;