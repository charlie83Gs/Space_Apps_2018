import React from 'react';
import {routes, routes_singleton} from '../constants/routes';

class NavBarItem extends React.Component {
	constructor(props) {
    super(props);
    if(this.props.selected){
	    this.state = {
	      name: this.props.name,
	      selected: this.props.selected
	    };
	}else{
		this.state = {
	      name: this.props.name,
	      selected: false
	    };
	}

	}

	render(){
		return(
			<div style = {this.state.selected ? style.selected : style.normal}>
				<button>{this.name}</button>
			</div>
			);
	}
	
	}
export default NavBarItem;


	const style = {
		selected : {
			"background-color": "#5e3300",
			"text-align": "center"

		},

		normal : {
			"background-color": "#d1c0ad",
			"text-align": "center"
		}
		
		
	}