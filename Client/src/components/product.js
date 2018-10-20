import React from 'react';
import './product_style.css'

class Product extends React.Component {
	constructor(props) {
    
	super(props);
    
	this.state = {
      name: this.props.name,
	  price: this.props.price,
	  amount: this.props.amount,
	  product:this.props.product
    };
	}
	
	
	render(){
		return(
		<button className = "product_body">
			<p className="product_title">{this.state.name}</p>
			<p>Precio: ₡ {this.state.price}</p>
			<p>Disponible: {this.state.amount}</p>
		</button>
		);
	}
	
	


	}
	
export default Product;

