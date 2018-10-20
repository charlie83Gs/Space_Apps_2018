import React from 'react';
import {routes, routes_singleton} from '../constants/routes';

class NavBarItem extends React.Component {
	constructor(props) {
    super(props);
    if(this.props.selected){
	    this.state = {
	      name: this.props.name,
	      selected: this.props.selected,
	      width: this.props.width,
	      owner: this.props.owner,
	      index: this.props.index,
	      callback: this.props.callback
	    };
	}else{
		this.state = {
	      name: this.props.name,
	      selected: false,
	      width: this.props.width,
	      owner: this.props.owner,
	      index: this.props.index,
	      callback: this.props.callback
	    };
	}



	//console.log(this.state);
	this.selected = this.selected.bind(this);
	}


	componentDidUpdate(prevProps) {
  
	  	if (this.props.selected !== prevProps.selected) {
	  		this.setState({selected : this.props.selected,width: this.props.width,});
	  		//console.log(this.props.width);

		}
	}

	selected(){
		this.state.owner.selectItem(this.state.index);
		if(this.state.callback){
			//console.log("changing screen");
			this.state.callback();
		}

	}

	render(){
		return(

				this.state.selected ?
				<button style={{...style.selected,...{width : this.state.width}}} onClick={this.selected}>
					{this.state.name}
				</button>
				:
				<button style={{...style.normal,...{width : this.state.width}}}   onClick={this.selected}>
					{this.state.name}
				</button>
			);
	}
	
	}
export default NavBarItem;


	const style = {
		selected : {
			"backgroundColor": "#af9582",
			"textAlign": "center",
			"fontSize": "20pt",
			"padding": "10px",
			"paddingTop": "15px",
			"paddingBottom": "15px",
			"borderRadius":"5px"

		},

		normal : {
			"backgroundColor": "#d3c7be",
			"textAlign": "center",
			"fontSize": "20pt",
			"padding": "10px",
			"borderRadius":"5px"
		}
		
		
	}