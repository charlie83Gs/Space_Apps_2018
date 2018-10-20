import React from 'react';
import './product_style.css';
import {set_amount} from '../controller/product_controller'

class ProductAdmin extends React.Component {
	constructor(props) {
    
	super(props);
    
	this.state = {
      name: this.props.name,
	  price: this.props.price,
	  amount: this.props.amount,
	  product: this.props.product
    };

    this.changeAmount = this.changeAmount.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);

	}
	
	handleChangeAmount(event) {

		let thisComp = this; 
		set_amount(this.state.product,event.target.value,
			function(res){
				if(res.valid){
					this.state.product.amount = event.target.value;
					thisComp.setState({product:this.state.product});
				}
				
			}
		)

	}

	changeAmount(value){
		let thisComp = this; 
		set_amount(this.state.product,this.state.product.amount+value,
			function(res){
				console.log("set amount done...");
				console.log(res);
				if(res.valid){
					thisComp.state.product.amount += value;

					thisComp.setState({product:thisComp.state.product});
				}
			}
		)
	}

	render(){
		return(
		<div className = "admin_product_body">
			<p className="product_title">{this.state.product.name}</p>
			<p>Precio: ₡ {this.state.product.cost}</p>
			<div>
				<label>Disponible: </label>
				<input className="product_amount_input" value = {this.state.product.amount}/>
			</div>
			<div>
				<button className="minus_button" onClick={(ev) => this.changeAmount(-1)}>-</button>
				<button className="plus_button" onClick={(ev) => this.changeAmount(1)}>+</button>
			</div>
		</div>
		);
	}
	
	


	}
	
export default ProductAdmin;

