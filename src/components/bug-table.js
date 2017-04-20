import React from "react";
import BugRow from "./bug-row";

export default class BugTable extends React.Component{
	
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