import React from "react";


export default class Message extends React.Component{
    render(){
        var alert = this.props.error? "alert alert-danger":"alert alert-success";
        return(
            <div className={"col-md-6 col-md-offset-3 col-xs-12 "+alert} role="alert">
                {this.props.error||this.props.message}
            </div>
        );
    }
}