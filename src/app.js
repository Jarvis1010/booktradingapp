class BugFilter extends React.Component{
	render(){
		return(
			<div className="col-xs-12 text-center">Place Holder Text for Filter</div>	
		);
	}
}

class BugTable extends React.Component{
	render(){
		return(
			<div className="col-xs-12 text-center">Place Holder Text for Table</div>	
		);
	}
}

class BugForm extends React.Component{
	render(){
		return(
			<div className="col-xs-12 text-center">Place Holder Text for Form</div>	
		);
	}
}

class BugList extends React.Component{
	render(){
		return(
			<div>
				<BugFilter/>
				<BugTable/>
				<BugForm/>
			</div>
		);
	}
}

ReactDOM.render(
	<BugList/>,
	document.getElementById('example')
);