import React from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import jQuery from 'jquery';

export default class ProfilePage extends React.Component{
   constructor(props){
        super(props);
        
        this.state={};
    }
   componentWillMount(){
       let query={
           url:"/api/profile",
           beforeSend:(xhr)=>{
               xhr.setRequestHeader('Authorization',"Bearer "+ window.sessionStorage.token);
           },
           success:(res)=>{
               console.log(res);
           }
       };
       jQuery.ajax(query);
   }
    render(){
       let page;
       if(!this.props.isLoggedIn){
           page=<Redirect to='/'/>;
       }else{
           page=<h1 className="text-center">Profile Page</h1>;
       }
       
       return(
            <div>
                {page}
           </div>
        ); 
    }
} 