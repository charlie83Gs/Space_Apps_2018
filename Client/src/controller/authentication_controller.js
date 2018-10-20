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

export async function auth_register(username, email,password,callback){
	let requestUrl = 'http://'+constants.API_URL+':'+constants.API_PORT+"/register";
	
	//let hashedPassword = bcrypt.hashSync(password+dummyData+username);
	//console.log(password+dummyData+username +"---->" +hashedPassword);
	// Store hash password to DB
	let parameters = {
		"passwordConf":"none",
		"email":email,
		"username":username,
		"password":password
	};

	let config ={...requestConfig,...{body: JSON.stringify(parameters)}};
	//console.log("register request: " + requestUrl);
	fetch(requestUrl,config)
      .then(response => response.json())
      .then(result => onRegisterResult(result,callback));
 	
  
}

function onRegisterResult(result,callback) {
	console.log("registro procesado.. ");
    console.log(result);
    if(callback){
    	callback(result);
	}
}


//login side of things

export async function auth_login(username, password,callback){
	let requestUrl = 'http://'+constants.API_URL+':'+constants.API_PORT+'/login';

	//let hashedPassword = bcrypt.hashSync(password+dummyData+username);
	//console.log(password+dummyData+username +"---->" +hashedPassword);
	let parameters = {
		"username":username,
		"password":password
	};

	let config ={...requestConfig,...{body: JSON.stringify(parameters)}};
	fetch(requestUrl, config)
      .then(response => response.json())
      .then(result => onLoginResult(result,callback));

}

function onLoginResult(result,callback){
    console.log("login procesado.. ");
    console.log(result);
	if(callback){
    	callback(result);
	}
}

