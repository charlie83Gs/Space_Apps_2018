///import bcrypt from 'bcryptjs';
import {constants} from "../constants/constants";

const dummyData = "turtle33";

const requestConfig = {
	method: 'POST',
	headers : { 
	        'Content-Type': 'application/json',
	        'Accept': 'application/json'
	}
}
//register side of things

export async function auth_create_product(name,cost,callback){
	let requestUrl = 'http://'+constants.API_URL+':'+constants.API_PORT+"/product/create";
	let parameters = {
		"name":name,
		"cost":cost
	};
	requestConfig.method = "POST";
	let config ={...requestConfig,...{body: JSON.stringify(parameters)}};
	fetch(requestUrl,config)
      .then(response => response.json())
      .then(result => onCreateProductResult(result,callback));


}

function onCreateProductResult(result, callback){
	console.log("Create product request completed... ");
	console.log(result);
	if(callback){
		callback(result);
	}
}


export async function list_products(callback){
	let requestUrl = 'http://'+constants.API_URL+':'+constants.API_PORT+"/product/list";
	requestConfig.method = "GET";
	fetch(requestUrl,requestConfig)
      .then(response => response.json())
      .then(result => onListProducts(result,callback));


}

function onListProducts(result, callback){
	console.log("List products request completed... ");
	console.log(result);
	if(callback){
		callback(result);
	}
}

export async function set_amount(product,newAmount,callback){
	let requestUrl = 'http://'+constants.API_URL+':'+constants.API_PORT+"/product/set_amount";
	console.log(parseInt(newAmount));
	let parameters = {
		"amount": parseInt(newAmount),
		"id":product["_id"]
	};
	requestConfig.method = "POST";
	let config ={...requestConfig,...{body: JSON.stringify(parameters)}};
	fetch(requestUrl,config)
      .then(response => response.json())
      .then(result => {
      	if(callback){
      		callback(result);
      	}
      });


}
/*
function onProduct(result, callback){
	console.log("List products request completed... ");
	console.log(result);
	if(callback){
		callback(result);
	}
}*/



