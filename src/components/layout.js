import React from 'react';
import NavBar from './nav-bar';
import jwtDecode from 'jwt-decode';
import {HashRouter as Router, Route} from 'react-router-dom';
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
        
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(obj)
        })
        .then(res=>res.ok?res.json():Promise.reject(res))
        .then((res)=>{
                window.sessionStorage.token=res.token;
                this._authenticate();
            })
        .catch(err=>console.log("Error: ",err));
        
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
                <div className="container-fluid layout">
                    <NavBar {...this.state} login={this._login}/>
                    <Route exact={true} path="/" render={()=>{return <MainPage {...this.state}/>;}}/>
        			<Route path="/register" render={()=>{return <RegisterPage {...this.state}/>;}}/>
        			<Route path="/profile" render={()=>{return <ProfilePage {...this.state}/>;}}/>
                </div>
            </Router>    
        );
    }
}