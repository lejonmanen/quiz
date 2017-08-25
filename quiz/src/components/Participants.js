import React from 'react';
//import WriteQuestion from './WriteQuestion';


function Participants(props) {
	console.log('Participants', props.party);
	return (
		<div>Medverkande: {props.party.length} st. <br/>
			{ props.party.map( p => p.name ).join(', ') }
		</div>
	);
}

export default Participants;