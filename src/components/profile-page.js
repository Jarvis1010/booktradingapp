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
        console.log(profile);
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
               if(err.status===401||err.status===403){
                  delete window.sessionStorage.token;
               }
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
                <Profile name={this.state.name} username={this.state.username} 
                    email={this.state.email} location={this.state.location} 
                    saveProfile={this._saveChanges}/>
           </div>
        ); 
    }
} 