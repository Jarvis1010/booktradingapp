import React from 'react';
import NavBar from './nav-bar';
import jQuery from "jquery";
import jwtDecode from 'jwt-decode';

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
                console.log(err);
                delete window.sessionStorage.token;
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
            <div>
                <NavBar {...this.state} login={this._login}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>    
        );
    }
}