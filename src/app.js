class BugFilter extends React.Component{
	render(){
		return(
			<div className="col-xs-12 text-center">Place Holder Text for Filter</div>	
		);
	}
}

class BugTable extends React.Component{
	
	render(){
		var bugRows=this.props.bugList.map((bug,index)=>{
			return(<BugRow id={bug.id} status={bug.status} priority={bug.priority} owner={bug.owner} title={bug.title} key={index}/>);
		});
		return(
			<table className="table">
				<tbody>
					{bugRows}
				</tbody>
			</table>	
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

class BugRow extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.status}</td>
				<td>{this.props.priority}</td>
				<td>{this.props.owner}</td>
				<td>{this.props.title}</td>
			</tr>
		);
	}
}

class BugList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			bugs:[{status:"active",priority:"1",owner:"Me",title:"Testing"},
				{status:"inactive",priority:"2",owner:"You",title:"Testing1"}]
		};
	}
	render(){
		return(
			<div>
				<h1 className="text-center">Bug Filter</h1>
				<BugFilter/>
				<BugTable bugList={this.state.bugs}/>
				<BugForm/>
			</div>
		);
	}
}

ReactDOM.render(
	<BugList/>,
	document.getElementById('example')
);