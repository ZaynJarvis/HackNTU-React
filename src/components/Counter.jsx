import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex-direction: column;
`;

const Button = styled.button`
	margin: 2rem;
	outline: none;
	background: transparent;
	color: #047;
	height: 3rem;
	width: 7rem;
	border-radius: 5px;
	border: 2px solid #047;
	font-size: 1.4rem;
	transition: 0.4s;
	box-shadow: 0 2px 3px #0479;
	&:hover {
		color: cyan;
		box-shadow: 0 0 1px #0449;
		border: 2px solid cyan;
		transform: scale(0.98) translateX(1px) translateY(1px);
	}
`;

const Count = styled.span`
	color: cyan;
`;

const Counter = () => {
	const [count, setCount] = React.useState(0);
	return (
		<Wrapper>
			<Button onClick={() => setCount(count + 1)}>add one</Button>
			<Count>{count}</Count>
		</Wrapper>
	);
};
export default Counter;
