import React from "react";
import jQuery from "jquery";

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state={};
        this._handleChange=this._handleChange.bind(this);
        this._login=this._login.bind(this);
    }
    _handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
    _login(e){
        e.preventDefault();
        this.props.login(this.state);
    }
    render(){
        return(
            <form onChange={this._handleChange} onSubmit={this._login} className="navbar-form navbar-right">
                  <div className="form-group">
                    <label className="sr-only" for="username">Username</label>
                    <input required name ="username" type="text" className="form-control" id="username" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="password">Password</label>
                    <input required name="password" type="password" className="form-control" id="password" placeholder="Password"/>
                  </div>
                  <button className="btn btn-default">Sign in</button>
            </form>    
        );
    }
}