import React from 'react';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={changed:false};
        
        this._handleChange=this._handleChange.bind(this);
        this._cancel=this._cancel.bind(this);
        this._saveChanges=this._saveChanges.bind(this);
    }
    _handleChange(e){
        this.setState({[e.target.name]:e.target.value,changed:true});
        console.log({[e.target.name]:e.target.value});
    }
    _cancel(e){
        e.preventDefault();
        let defaultState={
            changed:false,
            name:this.props.name||'',
            username:this.props.username||'',
            email:this.props.email||'',
            location:this.props.location||''
        };
        this.setState(defaultState);
    }
    _saveChanges(e){
         e.preventDefault();
         this.props.saveProfile(this.state);
    }
    componentWillReceiveProps(props){
        this.setState(props);
    }
    render(){
            let buttons;
            if(this.state.changed){
               buttons=(
                    <div className="col-md-6 col-md-offset-3 col-xs-12 padded">
                        <button onClick={this._cancel} className="btn btn-default pull-right">Cancel</button>
                        <button onClick={this._saveChanges} className="btn btn-success pull-right">Save Changes</button>
                    </div>
                ); 
            }
        return(
            <div>
                <header className="row">
                    <h1 className="text-center">Profile Page</h1>
                </header>
                <form onChange={this._handleChange} className="row">
                  <div className="col-md-6 col-md-offset-3 col-xs-12">
                      <h2 className="text-center">
                        <input name="name" type="text" className="transparent text-center" value={this.state.name} placeholder="Enter your name"/>
                      </h2>
                      <h3 className="text-center">{this.state.username}</h3>
                      <hr/>
                  </div>
                    <h4 className="col-md-3 col-md-offset-3 col-xs-12 text-center">
                        <span className="glyphicon glyphicon-map-marker"></span>
                        <input name="location" type="text" className="transparent text-center" value={this.state.location} placeholder="Enter your City, State"/>
                    </h4>
                    <h4 className="col-md-3 col-xs-12 text-center">
                        <span className="glyphicon glyphicon-envelope"></span>
                        <input required name="email" type="email" className="transparent text-center" value={this.state.email} placeholder="Enter your Email"/ >
                    </h4>
                    {buttons}
                </form>
            </div>    
        );
    }
}