import React from 'react';
import NavBar from './nav-bar';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            userName:''
        };
    }
    render(){
        return(
            <div>
                <NavBar {...this.state} />
                <div className="container">
                {this.props.children}
                </div>
            </div>    
        );
    }
}