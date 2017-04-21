import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import BugList from "./components/bug-list";
import Layout from './components/layout';


const app=(
	<Router>
		<Route path="/" component={Layout}>
			<Route path="bugs" component={BugList}/>
		</Route>
	</Router>
); 


ReactDOM.render(
	app,
	document.getElementById('example')
);