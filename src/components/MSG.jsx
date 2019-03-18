import React from 'react';
import styled from 'styled-components';
import FirebaseApp from '../utils/firebase';

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
	color: #3ff;
	border-radius: 5px;
	padding: 10px;
	cursor: pointer;
	border: 2px solid #3ff;
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

const MSG = () => {
	const [fact, setFact] = React.useState([]);
	return (
		<Wrapper>
			<Button
				onClick={() =>
					FirebaseApp.get().then(ss => {
						let arr = [];
						ss.forEach(function(doc) {
							arr = [doc.data(), ...arr];
						});
						setFact(arr);
					})
				}
			>
				Get msg
			</Button>
			{fact.map(item => (
				<Result>{item.msg}</Result>
			))}
		</Wrapper>
	);
};
export default MSG;
