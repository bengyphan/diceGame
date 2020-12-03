import React from 'react';
import Dice from './Dice';

function App() {
	return (
		<div className="App">
			<Dice numDice={4} title={'Roll me!'} />
			<Dice />
		</div>
	);
}

export default App;
