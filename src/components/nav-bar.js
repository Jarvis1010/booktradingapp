import React from "react";
import LoginForm from "./login-form";
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
	_logout(e){
	  e.preventDefault();
	  delete window.sessionStorage.token;
	}
	render(){
		
		const navBarHeader=(
			<div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">BookSwap</Link>
            </div>
		);
		
		let navRight=(
		  <div className="navbar-form navbar-right">
		    <p className="navbar-text">Welcome {this.props.userName}</p>
		    <button onClick={this._logout.bind(this)} className="btn btn-primary">Logout</button>
		  </div>  
		);
		let navLeft=(<li><Link to="/profile">Profile</Link></li>);
		
		if(!this.props.isLoggedIn){
			navRight=(<LoginForm login={this.props.login}/>);
			navLeft=(<li><Link to="/register">Register</Link></li>);
		}
		
		return(
			<div className="container-fluid">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    {navBarHeader}
                	<div className="collapse navbar-collapse" id="collapse-1">
                      <ul className="nav navbar-nav">
                        {navLeft}
                      </ul>
                      {navRight}
                    </div>
                  </div>
                </nav>
             </div>	
		);
	}
}