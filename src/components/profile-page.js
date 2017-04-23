import React from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default class ProfilePage extends React.Component{
   constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            userName:''
        };
        
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
     componentWillMount(){
        this._authenticate()
    }
    render(){
       let page;
       if(!this.state.isLoggedIn){
           page=<Redirect to='/'/>;
       }else{
           page=<h1 className="text-center">Profile Page</h1>;
       }
       console.log(this.state);
       return(
            <div>
                {page}
           </div>
        ); 
    }
} 