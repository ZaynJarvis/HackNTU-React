import React from 'react';

const Counter = () => {
	const [count, setCount] = React.useState(0);
	return (
		<>
			<button onClick={() => setCount(count + 1)}>add one</button>
			<span>{count}</span>
		</>
	);
};
export default Counter;
