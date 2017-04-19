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
	constructor(props){
		super(props);
		this.state={};
	}
	_handleClick(e){
		e.preventDefault();
		this.props.addBug(this.state);
		this.setState({owner:"",title:"",status:"",priority:""});
	}
	_handleChange(e){
		e.preventDefault();
		let target=e.target;
		this.setState({[target.name]:target.value})
	}
	render(){
		return(
			<form onChange={this._handleChange.bind(this)} className="form-inline">
			  <div className="form-group">
			    <label for="owner">Owner</label>
			    <input value={this.state.owner} name="owner" type="text" className="form-control" id="owner" placeholder="Jane Doe"/>
			  </div>
			  <div className="form-group">
			    <label for="title">Title</label>
			    <input value={this.state.title} name="title" type="text" className="form-control" id="title" placeholder="title"/>
			  </div>
			  <div className="form-group">
			    <label for="status">Status</label>
			    <input value={this.state.status} name="status" type="text" className="form-control" id="status" placeholder="status"/>
			  </div>
			  <div className="form-group">
			    <label for="priority">Priority</label>
			    <input value={this.state.priority} name="priority" type="text" className="form-control" id="priority" placeholder="priority"/>
			  </div>
			  <button onClick={this._handleClick.bind(this)} type="submit" className="btn btn-default">Submit</button>
			</form>	
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
	_handleAddBug(bug){
		this.setState({
			bugs:this.state.bugs.concat([bug])
			
		});
	}
	render(){
		return(
			<div>
				<h1 className="text-center">Bug Filter</h1>
				<BugFilter/>
				<BugTable bugList={this.state.bugs}/>
				<BugForm addBug={this._handleAddBug.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(
	<BugList/>,
	document.getElementById('example')
);