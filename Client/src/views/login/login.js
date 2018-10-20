import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {auth_login} from "../../controller/authentication_controller"

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userpass: '',
      errorMessage: ''
    };
	
	this.login = this.login.bind(this);
	this.handleChangeUser = this.handleChangeUser.bind(this);
	this.handleChangePassword = this.handleChangePassword.bind(this);
	}
	
	login(){
		//user autentication to login with stat name and password
		if(this.state.username == ""){
			this.setState({errorMessage:"Por favor inserte su usuario!!"})
		}else if(this.state.userpass == ""){
			this.setState({errorMessage:"Por favor inserte su contraseña!!"})
		}else{
			let actual_component = this;
			auth_login(this.state.username,this.state.userpass,function(result){
				if(result.valid){
					//actual_component.setState({errorMessage:""});
					if(result.data.isAdmin){
						routes_singleton.getInstance().setState(routes.ADMIN_MENU);
					}else{
						routes_singleton.getInstance().setState(routes.COUNTER);
					}
				}else{
					actual_component.setState({errorMessage:"Usuario o contraseña invalidos, por favor intentelo de nuevo"});
				}
			});
		}
		
		//routes_singleton.getInstance().setState(routes.COUNTER);
		//console.log(routes_singleton.getInstance());
		//routes_singleton.getInstance().setState(routes.ADMIN_MENU);
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
				{this.state.errorMessage != '' &&  <p>{this.state.errorMessage}</p> }
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