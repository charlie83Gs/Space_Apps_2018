import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/adminNav';
import Navbar from '../../components/navbar';
import User from '../../components/user';

class AdminUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
	

	}

	render(){
		return(
			<div className="centered_body">
			<div>
			<h1>Administrar usuarios</h1>
			<Navbar items={navRoutes} selected={2}/>
			</div>
			<div className="user_table_title">
			<label className="user_title">Usuario</label>
			<label className="user_title">Tipo</label>	
			</div>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={true}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Mari" admin={true}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={true}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Charlie" admin={false}/>
			<User name="Mari" admin={true}/>
			<User name="Charlie" admin={false}/>

			</div>
		);
		
	}
}


export default AdminUser;