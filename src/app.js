import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Layout from './components/layout';

ReactDOM.render(
	<Layout/>,
	document.getElementById('myapp')
);