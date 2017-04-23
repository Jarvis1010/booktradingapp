import React from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default class ProfilePage extends React.Component{
   constructor(props){
        super(props);
        
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