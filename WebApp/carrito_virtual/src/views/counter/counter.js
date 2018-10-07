import React from 'react';
import Navbar from '../../components/navbar';
import {routes, routes_singleton} from '../../constants/routes';
import './style.css';


var navRoutes;

class Counter extends React.Component {

  constructor(props) {
    super(props);

     navRoutes={
	"Mostrador" : routes.COUNTER,
	"Salir" : routes.LOGIN
	}

    this.state = {
    };
	

	}

	render(){
		return(
			<div className="centered_body">
				<h1 className="center_tittle">Productos disponibles</h1>
				<Navbar items={navRoutes}/>
			</div>
		);
		
	}
}


export default Counter;