import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import BugList from "./components/bug-list";
import Layout from './components/layout';


const app=(
	<Router>
		<Layout>
			<Route exact={true} path="/" render={()=>{return(<h1>Hi</h1>);}}/>
			<Route path="/bugs" component={BugList}/>
		</Layout>
	</Router>
); 


ReactDOM.render(
	app,
	document.getElementById('example')
);