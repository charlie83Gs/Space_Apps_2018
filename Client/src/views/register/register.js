import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {auth_register} from "../../controller/authentication_controller"

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	username: "",
    	password: "",
    	email: "",
    	errorMessage: ""
    };
	this.cancel = this.cancel.bind(this);
	this.register = this.register.bind(this);

	}
		//{(event) => this.handleChange("username",event)}
	handleChange(name, event){
		let newValue = {};
		newValue[name] = event.target.value;
		this.setState(newValue);
	}

	register(){

		auth_register(this.state.username,this.state.email,this.state.password);
	    //console.log("trying to register :" + this.state.username);
		//routes_singleton.getInstance().setState(routes.COUNTER);
	}

	cancel(){
		routes_singleton.getInstance().setState(routes.LOGIN);
	}

	render(){
		return(
			<div className="centered_body">
			<h1 className="center_tittle">Registrarse en el carrito virtual</h1>
						{this.state.errorMessage != '' &&  <p>{this.state.errorMessage}</p> }
						<p>Nombre de usuario</p>
						<input className="center-colum" value={this.state.username} 
						onChange={(event) => this.handleChange("username",event)} type="text" /><br/>
						<p>Correo</p>
						<input className="center-colum" value={this.state.email} 
						onChange={(event) => this.handleChange("email",event)} type="email" /><br/>
						<p>Contraseña</p>
						<input className="center-colum" value={this.state.password} 
						onChange={(event) => this.handleChange("password",event)} type="password" /><br/>
						<button onClick={this.register} className="center_normal_button positive_button">Registrar</button>
						<button onClick={this.cancel} className="center_normal_button negative_button">Cancelar</button>
			</div>
		);
		
	}
}


export default Register;