import React from 'react';
import './style.css';
import {routes, routes_singleton} from '../../constants/routes';
import {navRoutes} from '../../constants/adminNav';
import Navbar from '../../components/navbar';
import Product from '../../components/product';
import {auth_create_product} from "../../controller/product_controller"


class InsertProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	category: ["category 1", "category2","category3"],
    	actualCategory: "category 1",
    	name: "",
    	cost: "",
    	errorMessage: ''
    };
	
    this.registerProduct = this.registerProduct.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

	registerProduct(){
		if(this.state.name ==""){
			this.setState({errorMessage:"Por favor inserta un nombre de producto valido :("});
		}else if(this.state.cost ==""){
			this.setState({errorMessage:"Por favor inserta un costo de producto valido :("});
		}else{
			let thisComp = this;
			auth_create_product(this.state.name,this.state.cost,
				function(result){
					if(result.valid){
						thisComp.setState({errorMessage:"Producto creado correctamente !!!"});
					}else{
						thisComp.setState({errorMessage:"Error al crear el producto !!!"});
					}
				}


				);
		}
		
	}
	handleChange(name, event){
		let newValue = {};
		newValue[name] = event.target.value;
		this.setState(newValue);
	}

	categoryChange(event) {
		this.setState({actualCategory: event.target.value});
	}

	render(){
		return(
			<div className="centered_body">
				<h1>Estas creando un producto</h1>
				<Navbar items={navRoutes} selected={1}/>

				<div>
					{this.state.errorMessage != '' &&  <p>{this.state.errorMessage}</p> }
					<p>Nombre del producto</p>
					<input className="center-colum" type="text" value={this.state.name}
					onChange={(event) => this.handleChange("name",event)}/><br/>
					<p>Precio del producto en colones</p>
					<input className="center-colum" type="number" value={this.state.cost} 
					onChange={(event) => this.handleChange("cost",event)}/><br/>
					<button onClick={this.registerProduct} className="center_normal_button positive_button">Crear</button>
				</div>
			</div>
		);
		
	}
}
/*
<div>
<label>Categoria: </label>
<select className="center-colum"  onChange={this.categoryChange} value={this.state.actualCategory}>
					{this.state.category.map((cat, index) =>{
						return <option value={index}>{cat}</option>
				      }
				      )
					}
					</select>
					</div>
*/

export default InsertProduct;