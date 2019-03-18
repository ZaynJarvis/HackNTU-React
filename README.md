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
  - Formik
  - Router
  - Dynamic content with API
- [React Advanced](#advanced)
  - UI libraries
  - Styling with styled-components
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
git clone --branch=starter https://github.com/ZaynJarvis/HackNTU-React.git
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
