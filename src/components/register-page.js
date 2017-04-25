import React from "react";
import jQuery from "jquery";
import Message from "./message";

export default class LoginForm extends React.Component{
    constructor(){
        super();
        this.state={message:'',error:''};
        
        this._handleClick=this._handleClick.bind(this);
        this._handleChange=this._handleChange.bind(this);
    }
    _passwordsMatch(){
        return this.state.password===this.state.passwordRepeat;
    }
    _handleChange(e){
        e.preventDefault();
        let target=e.target;
        this.setState({[target.name]:target.value});
    }
    _handleClick(e){
        e.preventDefault();
        if(this._passwordsMatch()){
            let data={
                username:this.state.username,
                email:this.state.email,
                password:this.state.password
            }
            let query={
                method:"POST",
                url:"/api/register",
                data:data,
                error:(err)=>{
                    this.setState({error:err.message});
                },
                success:(result)=>{
                    this.setState({message:"Successful registration, please login",error:''});
                }
            };
            jQuery.ajax(query);
        }else{
            this.setState({error:"Passwords do not match"});
        }
    }
    render(){
        var message;
        var form;
        
        if(this.state.message){
            message=(<Message message={this.state.message}/>);
        }else if(this.state.error){
            message=(<Message error={this.state.error}/>);
        }
        
        if(!this.state.message){
            form=(
                <section className="row">
                    <form onSubmit={this._handleClick} onChange={this._handleChange} name="register" className="col-md-6 col-md-offset-3 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input required type="username" className="form-control" id="username" name="username" placeholder="Username" autoCapitalize="none"/>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input required type="email" className="form-control" id="email" name="email" placeholder="Email" autoCapitalize="none"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" className="form-control" id="password" name="password" placeholder="Password" autoCapitalize="none"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-repeat">Repeat Password</label>
                            <input required type="password" className="form-control" id="password-repeat" name="passwordRepeat" placeholder="Password" autoCapitalize="none"/>
                        </div>
                        <button className="btn btn-success">Register</button>
                    </form>
                </section>
            );
        }
        
        return(
            <div>
                <header className="row">
                    <h1 className="col-md-6 col-md-offset-3 col-xs-12 text-center special-font">Register</h1>
                </header>
                {form}
                <div className="row padded">
                    {message}
                </div>
            </div>   
        );
    }
}