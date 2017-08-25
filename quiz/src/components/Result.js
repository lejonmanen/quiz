import React from 'react';
//import WriteQuestion from './WriteQuestion';

function Result(props) {
	if( !props.q ) {
		return <div>Ingen aktiv fråga.</div>;
	}
	//const answers = props.party.map( o => o.answer )
	//	.sort().filter( (a, i, list) => list.indexOf(a) === i );
	//let numParticipants = answers.length;
	let numAnswers = props.party.reduce( (cur, prev) => cur.answer ? 1 : 0, 0 );
	const options = props.q.options.map( (op, i) => 
		(<li> {op}:
			{props.party.reduce( (cur, prev) => cur === i ? 1 : 0 )}
			röster, {Math.round(props.party.reduce( (cur, prev) => cur === i ? 1 : 0 ) / numAnswers*100)} % </li>) );
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