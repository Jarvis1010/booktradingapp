import React from 'react';
import {Link} from 'react-router-dom';

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/">Brand</a>
                    </div>
                
                    <div className="collapse navbar-collapse" id="collapse-1">
                      <ul className="nav navbar-nav">
                        <li><Link to="/bugs">Bugs</Link></li>
                        <li><a href="/">Link</a></li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="/">Link</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {this.props.children}
            </div>    
        );
    }
}