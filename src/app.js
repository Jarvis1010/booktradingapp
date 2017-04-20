import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";

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
			return(<BugRow {...bug} key={index}/>);
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
		this._handleChange=this._handleChange.bind(this);
		this._handleClick=this._handleClick.bind(this);
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
			<form onChange={this._handleChange} className="form-inline">
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
			  <button onClick={this._handleClick} className="btn btn-default">Submit</button>
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
		this.state={bugs:[]};
		this._handleAddBug=this._handleAddBug.bind(this);
	}
	
	_fetchBugs(){
		let request={
			method:'GET',
			url:'/api/bugs',
			success:(results)=>{
				this.setState({bugs:results});
				console.log(this.state);
			}
		};
		jQuery.ajax(request);
	}
	
	_handleAddBug(bug){
		
		jQuery.post('/api/bugs',bug,(res)=>{
			this.setState({
				bugs:this.state.bugs.concat(res)
			});	
		});
		
		
	}
	componentWillMount(){
		this._fetchBugs();
	}
	render(){
		return(
			<div>
				<h1 className="text-center">Bug Filter</h1>
				<BugFilter/>
				<BugTable bugList={this.state.bugs}/>
				<BugForm addBug={this._handleAddBug}/>
			</div>
		);
	}
}

ReactDOM.render(
	<BugList/>,
	document.getElementById('example')
);