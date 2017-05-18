import React from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

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
       
       fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+window.sessionStorage.token
            }, 
            body:JSON.stringify(profile)
        })
        .then(res=>res.ok?res.json():Promise.reject(res))
        .then((res)=>{
                this.setState(res);
            })
        .catch(err=>console.log("Error: ",err));
       
    }
    _checkAuth(status){
       if(status===401||status===403){
            delete window.sessionStorage.token;
        } 
    }
   componentWillMount(){
       fetch('/api/profile', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+window.sessionStorage.token
            }
        })
        .then(res=>res.ok?res.json():Promise.reject(res))
        .then((res)=>{
                this.setState(res);
            })
        .catch((err)=>{
               console.log(err.message);
               this._checkAuth(err.status);
           });
   }
    render(){
       let page;
       if(!this.props.isLoggedIn){
           page=<Redirect to='/'/>;
       }
       
       return(
            <div>
                {page}
                {this.state._id!='' && <Profile {...this.state} saveProfile={this._saveChanges}/>}
           </div>
        ); 
    }
} 