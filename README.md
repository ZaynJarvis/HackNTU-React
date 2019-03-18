# HackNTU-React

**by [Zayn Jarvis](https://github.com/ZaynJarvis) from [NTU Open Source Society](https://www.ntuoss.com)**

---

| Workshop Details |                                                                                                                   |
| :--------------: | ----------------------------------------------------------------------------------------------------------------- |
|       When       | Saturday, 23 Mar. 2019. 1:00 PM - 2:00 PM                                                                         |
|      Where       | TBD                                                                                                               |
|       Who        | IEEE                                                                                                              |
|    Questions     | Questions / Issues / Bug reports are welcomed to [Issue site](https://github.com/ZaynJarvis/HackNTU-React/issues) |

​For further discussion or cooperation please contact @ [zaynjarvis@gmail.com](zaynjarvis@gmail.com).

**_Disclaimer: This workshop is for educational purposes only. No prototype or outcome of any type is intended for commercial use._**

---

### Agenda

- [Introduction to React](#introduction)
- [Installation](#installation)
  - Clone the repo
  - React getting started
- [React Essential](#basic)
  - Tools will be used
  - Install packages
  - Application modular structure
  - React Hooks
  - Styling with styled-components
  - Formik
  - Router
  - Dynamic content with API
- [React Advanced](#advanced)
  - UI libraries
  - Firebase Firestore
  - Progressive Web App
  - Deploy to Netlify
- [Recommanded References](#references)
- [End Notes](#end-notes)

---

## introduction

[A JavaScript library for building user interfaces](https://reactjs.org/)

## installation

Install nodeJS and npm [here](https://nodejs.org/en/download/)

`@Optional` install yarn [here](https://yarnpkg.com/en/docs/install#mac-stable)

> `npm or yarn`: npm is stronger, yarn is faster [read here](https://www.keycdn.com/blog/npm-vs-yarn)

**First Approach**

Clone the a starter repo.

```bash
git clone https://github.com/ZaynJarvis/HackNTU-React.git
```

If you are a coder,
don't say you don't know GitHub... register an account [here](https://github.com/)
and never say you don't know git... learn it [here](https://github.com/clarencecastillo/NTUOSS-GitWorkshop)

Coders are assumed to be able to use version control tools. At least most interviewers do.

---

**Second Approach**

Getting started with React starter template.

```bash
npx create-react-app my-react
```

From above command `npx` is a package installer and executer come with npm (node package manager)
`create-react-app` is a package which help us to creat a react starter template
`my-react` is a random name that you can use to create the project, React don't allow you to create a project name with upper case.

And that's all you need to start a project!

#### A quick preview of React structure

> we reference the folder that package.json is in as the `'root folder' or '/'`. If you created React app using the above account root folder will be `my-react`

- development related configuration files put into the root folder e.g. linting configuration, testing configuration, README, Changelog
- deployment related files put into the
- React application source code in src
- `.test.js` / `.spec.js` are test files do to unit/ integration test, which is out of scope and not necessary in a Hackathon. However, testing is trivial in large scale / team based project
- `index.js` is the entry point of the React App
- `index.css` is the setting for react global style
- `serviceWorker` is for PWA (Progressive Web App), which cache the app in the client for offline support. Don't register serviceWorker when you are developing apps, cache will be a headache when you try to change stuff, [read here](https://developers.google.com/web/fundamentals/primers/service-workers/)
- `App.js` is our first react component

## basic

**Tools will be used**

- [styled-components](https://www.styled-components.com/docs): powerful css-in-js library
- [Firebase firestore](https://firebase.google.com/products/firestore/): online database which is great for rapid prototyping.
- [formik](https://jaredpalmer.com/formik/): The best form control library
- [react router](https://reacttraining.com/react-router/web/guides/quick-start): The best react router library

**Install packages**

Depending on your package management tools.
Check your pm by looking at lock file `yarn.lock` / `package-lock.json`

If you are on npm

```bash
$ npm i firebase styled-components react-router-dom formik
```

If you are on yarn

```bash
$ yarn add firebase styled-components react-router-dom formik
```

**Application Structure**

To manage your source file better in `/src`
I will create folders for different purposes

```bash
-> src/
  -> api/
  -> assets/
  -> containers/
  -> components/
  -> context/
  -> utils/
  -> mock/
  -> modals/
```

For this workshop I will only use some of them for simplicity, however it is a good take away to make file structure modular

**Basic React App**

This is the most basic react app which does nothing.

```js
import React from 'react';

const MainPage = () => <div />;
export default MainPage;
```

If you cannot get how the arrow work, it is a ES6 feature arrow function which make function declaration shorter. read [here](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

**React Hooks**

There are two type of React components

1. Pure components (Stateless components)
2. Stateful components

Starting from React 16.8, [released a month ago](https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019). There is a functional way to make a react stateful components, [React hooks](https://reactjs.org/docs/hooks-intro.html)

The most basic react hook is like this

```js
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
```

**Style with styled-components**

Here is the most basic styled component, which align content at center.
For more on [flexbox](https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc)

```js
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex-direction: column;
`;
```

CSS Color Code [here](https://www.quackit.com/css/css_color_codes.cfm)

**Formik**

Formik helps you to set up forms with ease.

```js
import React from 'react';
import { Formik, Form, Field } from 'formik';

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
			<Form>
				<Field type='email' name='email' />
				<Field type='password' name='password' />
				<button type='submit' disabled={isSubmitting}>
					Submit
				</button>
			</Form>
		)}
	</Formik>
);

export default CustomForm;
```

**React Router**

This is the most basic react router

```js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainPage from './containers/MainPage';
import FormPage from './containers/FormPage';

const App = () => (
	<Router>
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/form'>Form</Link>
			</nav>
			<Route path='/' exact component={MainPage} />
			<Route path='/form' component={FormPage} />
		</div>
	</Router>
);

export default App;
```

`exact` in Route is necessary cuz it means only / will match to that component.
`Link` function just like `a` tag but with the `to` directive

**Use api in React**

For this practice we will use a [geek jokes api](https://geek-jokes.sameerkumar.website/api) as an example

search apis [here](https://www.programmableweb.com)

you have to find APIs which supports [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

```js
const getFact = () => {
	fetch('https://geek-jokes.sameerkumar.website/api')
		.then(res => res.json())
		.then(res => setFact(res));
};
```

## advanced

**UI library**

Two recommanded UI libraries are

- [Material UI](https://material-ui.com/)
- [ant design](https://ant.design/)

Do take note that UI library may be hard to interpolate

**Firebase Firestore**

1. register an firebase app
2. create firebase singleton instance in your app.

```js
class FireApp {
	constructor(config) {
		firebase.initializeApp(config);
		this.firestore = firebase.firestore();
	}
	post(msg) {
		const time = new Date().toISOString();
		return this.firestore
			.collection('msg')
			.doc()
			.set({
				time,
				...msg,
			});
	}
	get() {
		return this.firestore.collection('msg').get();
	}
}

export default new FireApp(config);
```

> There is another way to add firebase to React context we do not cover it here, but you can read the approach on [web](https://google.com).

understand how to work with firebase get / post [here](https://firebase.google.com/docs/firestore/query-data/get-data)

**PWA**

1. draw your icon [here](https://vectr.com)
2. generate favicon [here](https://realfavicongenerator.net/)
3. Append icons into public folder
4. update manifest file

**Deploy with Netlify**

1. Get a netlify account
2. waiting it to publish
3. (damn simple right?)

## references

- [React](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
- [npm or yarn](https://www.keycdn.com/blog/npm-vs-yarn)
- [GitHub](https://github.com/)
- [Git-Workshop](https://github.com/clarencecastillo/NTUOSS-GitWorkshop)
- [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- [create-react-app](https://github.com/facebook/create-react-app)
- [service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [Firebase firestore](https://firebase.google.com/products/firestore/)
- [styled-components](https://www.styled-components.com/docs)
- [arrow functions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- [react 16.8](https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019)
- [react hook](https://reactjs.org/docs/hooks-intro.html)
- [formik](https://jaredpalmer.com/formik/)
- [react router](https://reacttraining.com/react-router/web/guides/quick-start)
- [flexbox](https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc)
- [css color code](https://www.quackit.com/css/css_color_codes.cfm)
- [API marketplace](https://www.programmableweb.com)
- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Material UI](https://material-ui.com/)
- [ant design](https://ant.design/)
- [firestore doc](https://firebase.google.com/docs/firestore/query-data/get-data)
- [Vectr online svg drawer](https://vectr.com)
- [Favicon generator](https://realfavicongenerator.net/)
- [About PWA](https://medium.com/@amberleyjohanna/seriously-though-what-is-a-progressive-web-app-56130600a093)

## end note

And that's it for this HackNTU React workshop. Hope this helps!

**_Happy Hacking!!!🎉🎉🎉_**

---

**_Made with ❤ by Zayn Jarvis from [NTUOSS](http://www.ntuoss.com/) collaborating with IEEE NTU Student Branch_**
