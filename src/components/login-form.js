import React from "react";
import jQuery from "jquery";

export default class LoginForm extends React.Component{
    render(){
        return(
            <form className="navbar-form navbar-right">
                  <div className="form-group">
                    <label className="sr-only" for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btn btn-default">Sign in</button>
            </form>    
        );
    }
}