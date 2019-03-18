import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import FirebaseApp from '../utils/firebase';

const WrapperForm = styled(Form)`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	* {
		margin: 10px;
	}
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

const StyledField = styled(Field)`
	padding: 10px;
	font-size: 2rem;
	background: transparent;
	border-radius: 2px;
	border: 1px solid #3ff;
	color: #3ff;
	outline: none;
`;
const CustomForm = () => (
	<Formik
		initialValues={{ msg: '' }}
		onSubmit={(values, { setSubmitting }) =>
			FirebaseApp.post(values)
				.then(() => {
					setSubmitting(false);
					alert('msg post success');
				})
				.catch(() => alert('msg post failed'))
		}
	>
		{({ isSubmitting }) => (
			<WrapperForm>
				<StyledField type="text" name="msg" />
				<Button type="submit" disabled={isSubmitting}>
					Submit
				</Button>
			</WrapperForm>
		)}
	</Formik>
);

export default CustomForm;
