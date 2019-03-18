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
	border-radius: 5px;
	padding: 10px;
	cursor: pointer;
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

const Result = styled.span`
	color: cyan;
	width: 70vw;
	margin: 0 auto;
	text-align: center;
`;

const CatFact = () => {
	const [fact, setFact] = React.useState('');
	const getFact = () => {
		fetch('https://geek-jokes.sameerkumar.website/api')
			.then(res => res.json())
			.then(res => setFact(res));
	};
	return (
		<Wrapper>
			<Button onClick={getFact}>Get new Animal</Button>
			<Result>{fact}</Result>
		</Wrapper>
	);
};
export default CatFact;
