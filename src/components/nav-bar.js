import React from "react";
import LoginForm from "./login-form";
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
	_logout(e){
	  e.preventDefault();
	  delete window.sessionStorage.token;
	  location.path('/');
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
		  <form onSubmit={this._logout.bind(this)} className="navbar-form navbar-right">
		    <label className="navbar-text">Welcome {this.props.userName}</label>
		    <button className="btn btn-primary">Logout</button>
		  </form>  
		);
		let navLeft=(
			<ul className="nav navbar-nav">
				<li className={window.location.hash=="#/profile"&&"active"}><Link to="/profile">Profile</Link></li>
				<li className={window.location.hash=="#/mybooks"&&"active"}><Link to="/mybooks">My Books</Link></li>
			</ul>	
		);
		
		if(!this.props.isLoggedIn){
			navRight=(<LoginForm login={this.props.login}/>);
			navLeft=(
				<ul className="nav navbar-nav">
					<li className={window.location.hash=="#/register"&&"active"}><Link to="/register">Register</Link></li>
				</ul>);
		}
		
		return(
			<div className="container-fluid">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              {navBarHeader}
            	<div className="collapse navbar-collapse" id="collapse-1">
                {navLeft}
                {navRight}
              </div>
            </div>
          </nav>
      </div>	
		);
	}
}