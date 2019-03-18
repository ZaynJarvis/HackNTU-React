import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

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

const CustomForm = () => (
	<Formik
		initialValues={{ email: '', password: '' }}
		onSubmit={(values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
		}}
	>
		{({ isSubmitting }) => (
			<WrapperForm>
				<Field type="email" name="email" />
				<Field type="password" name="password" />
				<button type="submit" disabled={isSubmitting}>
					Submit
				</button>
			</WrapperForm>
		)}
	</Formik>
);

export default CustomForm;
