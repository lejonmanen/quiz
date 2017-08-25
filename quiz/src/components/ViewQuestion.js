import React from 'react';

function ViewQuestion(props) {
	let doAnswer = (e) => {
		// TODO send answer to firebase
		//let answer = e.target.value;
		// also need NAME and QUESTION ID
	}
	const options = props.q.options.map( (op, i) => (
		<li>
			<label>
				<input type="radio"
					name={'q' + i}
					onClick={doAnswer}
					value={i} />
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