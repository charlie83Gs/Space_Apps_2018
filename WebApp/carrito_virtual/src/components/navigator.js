import React from 'react';
import {routes, routes_singleton} from "../constants/routes"


class Navigator extends React.Component  {
  static myInstance = null;
  constructor(props){
    super(props);
	this.state = {
	    singleton: routes_singleton.getInstance()
	 };	
	 this.handleChange =this.handleChange.bind(this);
	 this.state.singleton.setCallback(this.handleChange);
  }

  handleChange(){
  	this.forceUpdate();
  }

  goToView(nextView){
  	this.state.singleton.setState(nextView);
  }

  render(){
  	let $currentview = routes_singleton.getInstance().getState();
  	//console.log(currentview);
	return(
	  <$currentview navigator={this}/>
	);
  }

}

export default Navigator;