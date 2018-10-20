import React from 'react';
import Navbar from '../../components/navbar';
import Product from '../../components/product';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/userNavbar';
import './style.css';




class Counter extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
    };
	

	}

	render(){
		return(
			<div className="centered_body">
				<h1>Productos disponibles</h1>
				<Navbar items={navRoutes}/>
				<div className="products-div">
					<div>
					<label className="secondary_tittle">Disponibles</label>
					<input className="search_box" type="search" placeholder="Buscar producto"></input><br/>
					</div>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					<Product name="Pan de Canela" price="200" amount="20"/>
					</div>
				<div className="options-div">
				<h2>Opciones</h2>
				<p>Opcion #</p>
				<p>Opcion #</p>
				<p>Opcion #</p>
				<p>Opcion #</p>
				<p>Opcion #</p>
				<p>Opcion #</p>
				</div>

			</div>
		);
		
	}
}


export default Counter;