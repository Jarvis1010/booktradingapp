import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Layout from './components/layout';
import RegisterPage from './components/register-page';
import ProfilePage from './components/profile-page';
import MainPage from './components/main-page';

const app=(
	<Router>
		<Layout>
			<Route exact={true} path="/" component={MainPage}/>
			<Route path="/register" component={RegisterPage}/>
			<Route path="/profile" component={ProfilePage}/>
		</Layout>
	</Router>
); 


ReactDOM.render(
	app,
	document.getElementById('myapp')
);