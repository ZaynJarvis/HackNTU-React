import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './containers/MainPage';
import FormPage from './containers/FormPage';

const Nav = styled.nav`
	position: fixed;
	top: 20px;
	left: 20px;
	* {
		outline: none;
		text-decoration: none;
		color: #eee;
		margin-right: 30px;
	}
`;
const App = () => (
	<Router>
		<>
			<Nav>
				<Link to="/">Home</Link>
				<Link to="/form">Form</Link>
			</Nav>
			<Route path="/" exact component={MainPage} />
			<Route path="/form" component={FormPage} />
		</>
	</Router>
);

export default App;
