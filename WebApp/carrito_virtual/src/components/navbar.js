import React from 'react';
import {routes, routes_singleton} from '../constants/routes';
import NavBarItem from './navbarItem';



class Navbar extends React.Component {
	constructor(props) {
    super(props);

    let navBarItems = Object.keys(this.props.items);

    this.state = {
      selected: 0,
      items: navBarItems
    };


	}


	selectItem(newValue){
		this.setState({selected: newValue});
		//this.state.selected = newValue;
	}

	render(){
		return(
			<div>
			{this.state.items.map((itemName, index) =>{
				return index == this.state.selected ?
		        <NavBarItem name={itemName} selected={true}/>
		        :
		        <NavBarItem name={itemName} selected={false}/>
		      }
		      )
			}

			</div>
			)
	}

}

export default Navbar;