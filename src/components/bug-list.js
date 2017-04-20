import React from "react";
import jQuery from "jquery";
import BugFilter from "./bug-filter";
import BugForm from "./bug-form";
import BugTable from "./bug-table";

export default class BugList extends React.Component{
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