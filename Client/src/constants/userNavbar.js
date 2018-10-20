import {routes, routes_singleton} from './routes';

export const navRoutes={
	"Mostrador" : function(){routes_singleton.getInstance().setState(routes.COUNTER)},
	"Carrito" : function(){routes_singleton.getInstance().setState(routes.PAGO)},
	"Salir" : function(){routes_singleton.getInstance().setState(routes.LOGIN)},
	}