import React from 'react';
import './style.css';


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
					<form onSubmit={this.login}>
						<input className="center-colum" value={this.state.username} 
						onChange={this.handleChangeUser} type="text" /><br/>
						<input className="center-colum" value={this.state.userpass} 
						onChange={this.handleChangePassword} type="password" /><br/>
						<input className="center-colum" type="submit" value="Ingresar" /><br/>
					</form>
				</div>
			</div>
		);
		
	}
}


export default Login;