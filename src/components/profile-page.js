import React from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import jQuery from 'jquery';

import Profile from './profile';

export default class ProfilePage extends React.Component{
   constructor(props){
        super(props);
        
        this.state={
            _id:'',
            email:'',
            name:'',
            username:'',
            location:''
        };
        
        this._saveChanges=this._saveChanges.bind(this);
    }
    _saveChanges(profile){
        delete profile.changed;
        
        let query={
           method:"POST",
           url:"/api/profile",
           data:profile,
           beforeSend:(xhr)=>{
               xhr.setRequestHeader('Authorization',"Bearer "+ window.sessionStorage.token);
           },
           success:(res)=>{
               this.setState(res);
           },
           error:(err)=>{
               console.log(err.message);
               this._checkAuth(err.status);
           }
       };
       
       jQuery.ajax(query);
    }
    _checkAuth(status){
       if(status===401||status===403){
            delete window.sessionStorage.token;
        } 
    }
   componentWillMount(){
       let query={
           url:"/api/profile",
           beforeSend:(xhr)=>{
               xhr.setRequestHeader('Authorization',"Bearer "+ window.sessionStorage.token);
           },
           success:(res)=>{
               this.setState(res);
           },
           error:(err)=>{
               console.log(err.message);
               this._checkAuth(err.status);
           }
       };
       jQuery.ajax(query);
   }
    render(){
       let page;
       if(!this.props.isLoggedIn){
           page=<Redirect to='/'/>;
       }
       
       return(
            <div>
                {page}
                <Profile {...this.state} saveProfile={this._saveChanges}/>
           </div>
        ); 
    }
} 