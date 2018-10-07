import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	usuario: "",
    	pass: "",
    	correo: ""
    };
	

	}
		//{(event) => this.handleChange("username",event)}
	handleChange(name, event){
		let newValue = {};
		newValue[name] = event.target.value;
		this.setState(newValue);
	}

	register(){
		routes_singleton.getInstance().setState(routes.COUNTER);
	}

	cancel(){
		routes_singleton.getInstance().setState(routes.LOGIN);
	}

	render(){
		return(
			<div className="centered_body">
			<h1 className="center_tittle">Registrarse en el carrito virtual</h1>
				<form onSubmit={this.login}>
						<p>Nombre de usuario</p>
						<input className="center-colum" value={this.state.usuario} 
						onChange={(event) => this.handleChange("usuario",event)} type="text" /><br/>
						<p>Correo</p>
						<input className="center-colum" value={this.state.correo} 
						onChange={(event) => this.handleChange("correo",event)}type="text" /><br/>
						<p>Contraseña</p>
						<input className="center-colum" value={this.state.pass} 
						onChange={(event) => this.handleChange("password",event)} type="password" /><br/>
						<button onClick={this.login} className="center_normal_button positive_button">Resgitrar</button>
						<button onClick={this.login} className="center_normal_button negative_button">Cancelar</button>
					</form>
			</div>
		);
		
	}
}


export default Register;