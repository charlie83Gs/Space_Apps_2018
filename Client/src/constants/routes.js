import Login from "../views/login/login";
import AdminMenu from "../views/adminMenu/adminMenu";
import Counter from "../views/counter/counter";
import Cashier from "../views/cashier/cashier";
import InsertProduct from "../views/insertProduct/insertProduct";
import Pago from "../views/pago/pago";
import Register from "../views/register/register";
import AdminUser from "../views/adminUser/adminUser";


export const routes = {
	DEFAULT: Login,
	ADMIN_MENU: AdminMenu,
	COUNTER: Counter,
	CASHIER: Cashier,
	LOGIN: Login,
	INSERT_PRODUCT: InsertProduct,
	PAGO: Pago,
  REGISTER: Register,
	AMDIN_USER: AdminUser,

};

/*
/*
class routesManager {
  constructor() {
  	this.state = routes.DEFAULT;
  	this.getState = this.getState.bind(this);
  }


  getState(){
  	return this.state;
  }


  setState(newState){
  	return this.state = newState;
  }


}
*/
/*
export const routes_singleton = (function () {
    var instance;
 
    function createInstance() {
    	let object = new routesManager();
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
*/
export class routes_singleton {

    static myInstance = null;

    state = routes.DEFAULT;
    changedCallback = undefined;

    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (routes_singleton.myInstance == null) {
            routes_singleton.myInstance = new routes_singleton();
        }

        return this.myInstance;
    }

    getState() {
        return this.state;
    }

    setCallback(newCallback){
    	this.changedCallback = newCallback;
    }

    setState(newState) {
        this.state = newState;
        //console.log(changedCallback);
        if(this.changedCallback){
        	this.changedCallback();
        }
    }
}

