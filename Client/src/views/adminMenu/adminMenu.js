import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/adminNav';
import Navbar from '../../components/navbar';
import ProductAdmin from '../../components/productAdmin';
import {list_products} from "../../controller/product_controller"

class AdminMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	products:[]
    };
	
    this.productsLoaded = this.productsLoaded.bind(this);
    list_products(this.productsLoaded);
	}


	productsLoaded(loadResult){
		if(loadResult.valid){
			this.setState({products:loadResult.data});
		}
	}

	render(){
		return(
			<div className="centered_body">
				<h1>Menu de administrador</h1>
				<Navbar items={navRoutes}/>
				<div>
					{this.state.products.map(
						function(actual_product,index){
							return <ProductAdmin key={index} product={actual_product}/>
						}
					)
					}
				</div>
			</div>
		);
		
	}
}


export default AdminMenu;