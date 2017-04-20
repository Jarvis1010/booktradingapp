import React from "react";
import jQuery from "jquery";

export default class BugForm extends React.Component{
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