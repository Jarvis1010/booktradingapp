import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {Router, Route} from 'react-router';

import BugList from "./components/bug-list";
import Layout from './components/layout';


/*const app=(
	<Router>
		<Route path="/" component={Layout}>
			<Route path="bugs" component={BugList}/>
		</Route>
	</Router>
);*/


ReactDOM.render(
	<Layout><BugList/></Layout>,
	document.getElementById('example')
);