import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userpass: '',
    };
	
	this.login = this.login.bind(this);
	this.handleChangeUser = this.handleChangeUser.bind(this);
	this.handleChangePassword = this.handleChangePassword.bind(this);
	}
	
	login(){
		//user autentication to login with stat name and password
		routes_singleton.getInstance().setState(routes.COUNTER);
		//console.log(routes_singleton.getInstance());
		//routes_singleton.getInstances().setState(routes.ADMIN_MENU);
	}
	
	register(){
		routes_singleton.getInstance().setState(routes.REGISTER);
	}
	//{(event) => this.handleChange("username",event)}
	/*handleChange(name, event){
		let newValue = {};
		newValue[name] = event.target.value;
		this.setState(newValue);
	}*/
	
	handleChangeUser(event) {
		this.setState({username: event.target.value});
	}
	
	handleChangePassword(event) {
		this.setState({userpass: event.target.value});
	}
	
	render(){
		return(
			<div className="centered_body simlpe_bg" >
				<h1 className="center_tittle">Bienvenido al carrito virtual</h1>
				<div>		
						<p>Usuario</p>
						<input className="center-colum" value={this.state.username} 
						onChange={this.handleChangeUser} type="text" /><br/>
						<p>Contraseña</p>
						<input className="center-colum" value={this.state.userpass} 
						onChange={this.handleChangePassword} type="password" /><br/>
						<button onClick={this.login} className="center_main_button ">Ingresar</button><br/>
				</div>
				<div className="center-footer ">
					<p>¿No tienes una cuenta?</p>
					<button onClick={this.register}>Resgitrate aqui</button>
				</div>
			</div>
		);
		
	}
}


export default Login;