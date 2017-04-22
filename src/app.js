import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Layout from './components/layout';
import RegisterPage from './components/register-page';

const app=(
	<Router>
		<Layout>
			<Route exact={true} path="/" render={()=>{return(<h1 className="text-center">Main Page</h1>);}}/>
			<Route path="/register" component={RegisterPage}/>
		</Layout>
	</Router>
); 


ReactDOM.render(
	app,
	document.getElementById('myapp')
);