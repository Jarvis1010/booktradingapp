import React from 'react';
import Main from './main';
import DashBoard from './dash-board';


export default class MainPage extends React.Component{
   
    render(){
       let page;
       if(!this.props.isLoggedIn){
           page=<Main/>;
       }else{
           page=<DashBoard/>;
       }
       
       return(
            <div>
                {page}
           </div>
        );
    }
}