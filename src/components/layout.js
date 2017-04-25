import React from 'react';
import NavBar from './nav-bar';
import jQuery from "jquery";
import jwtDecode from 'jwt-decode';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import RegisterPage from './register-page';
import ProfilePage from './profile-page';
import MainPage from './main-page';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            userName:''
        };
        
        this._login=this._login.bind(this);
    }
    
    _authenticate(){
        let token= window.sessionStorage.token;
        if(token){
            let decoded=jwtDecode(token);
            this.setState({isLoggedIn:true,userName:decoded.username});
        }else{
           this.setState({isLoggedIn:false,userName:''}); 
        }
    }
    
    _login(obj){
        let query={
            method:"POST",
            url:"/api/login",
            data:obj,
            success:(res)=>{
                window.sessionStorage.token=res.token;
                this._authenticate();
            },
            error:(err)=>{
                console.log(err.message);
               if(err.status===401||err.status===403){
                  delete window.sessionStorage.token;
               }
            },
        }
        
        jQuery.ajax(query);
    }
    
    componentWillMount(){
        this._authenticate()
    }
    
    componentDidMount(){
        setInterval(()=>{
            this._authenticate();
        },1000);
    }
    
    render(){
        return(
            <Router>
                <div className="container-fluid">
                    <NavBar {...this.state} login={this._login}/>
                    <Route exact={true} path="/" render={()=>{return <MainPage {...this.state}/>;}}/>
        			<Route path="/register" render={()=>{return <RegisterPage {...this.state}/>;}}/>
        			<Route path="/profile" render={()=>{return <ProfilePage {...this.state}/>;}}/>
                </div>
            </Router>    
        );
    }
}