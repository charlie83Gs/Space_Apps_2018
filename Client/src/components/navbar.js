import React from 'react';
import {routes, routes_singleton} from '../constants/routes';
import NavBarItem from './navbarItem';



class Navbar extends React.Component {
	constructor(props) {
    super(props);

    let navBarItems = Object.keys(this.props.items);
    let itemWidth = (95/navBarItems.length) + "%";
    let selectedValue = 0;
    if(this.props.selected){
    	selectedValue = this.props.selected
    }
    this.state = {
      selected: selectedValue,
      itemNames: navBarItems,
      items: this.props.items,
      "itemWidth": itemWidth

    };

    this.selectItem = this.selectItem.bind(this);
	}

	

	selectItem(newValue){
		this.setState({selected: newValue});
		//console.log("Navbar selecting item " + newValue);
	}

	render(){
		return(
			<div>
			{this.state.itemNames.map((itemName, index) =>{
				return (this.state.selected == index) ?
		        <NavBarItem key={index} name={itemName} width={this.state.itemWidth} 
		        owner={this} selected={true} index={index} callback={this.state.items[itemName]}/>
		        :
		        <NavBarItem key={index} name={itemName} width={this.state.itemWidth}
		        owner={this} selected={false} index={index} callback={this.state.items[itemName]}/>
		      }
		      )
			}
			</div>
			)
	}

}

export default Navbar;