import React from 'react';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{
   
    render(){
       return(
            <div className="">
                <header className="row main-header">
                    <h1 className="text-center special-font">Book Swap</h1>
                    <h3 className="text-center"><Link to="/register">Register</Link> now to start trading books</h3>
                </header>
                <section className="row">
                    
                </section>
            </div>
        ); 
    }
}