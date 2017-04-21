import React from "react";
import jQuery from "jquery";

export default class LoginForm extends React.Component{
    constructor(){
        super();
        this.state={};
        
        this._handleClick=this._handleClick.bind(this);
    }
    _handleClick(e){
        e.preventDefault();
        console.log(e);
    }
    render(){
        return(
            <div>
                <header className="row">
                    <h1 className="col-md-6 col-md-offset-3 col-xs-12 text-center">Register</h1>
                </header>
                <section className="row">
                    <form onSubmit={this._handleClick} name="register" className="col-md-6 col-md-offset-3 col-xs-12">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="username" className="form-control" id="username" placeholder="Username" autoCapitalize="none"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" autoCapitalize="none"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" autoCapitalize="none"/>
                        </div>
                        <div className="form-group">
                            <label for="password-repeat">Repeat Password</label>
                            <input type="password" className="form-control" id="password-repeat" placeholder="Password" autoCapitalize="none"/>
                        </div>
                        <button className="btn btn-success">Register</button>
                    </form>
                </section>
            </div>   
        );
    }
}