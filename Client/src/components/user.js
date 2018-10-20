import React from 'react';
import './user_style.css';

class User extends React.Component {
	constructor(props) {
    
	super(props);
    
	this.state = {
      name: this.props.name,
	  isAdmin: this.props.admin
    };

	}
	
	
	render(){
		return(
		<div className = {this.state.isAdmin ? "user_body_admin" : "user_body"}>
			<div >
			<label className="user_title" >{this.state.name}</label>
			<label className="user_type">{this.state.isAdmin ? "Administrador" : "Cliente"}</label>
			</div>
		</div>
		);
	}
	
	


	}
	
export default User;

