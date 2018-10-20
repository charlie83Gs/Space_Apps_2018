import {routes, routes_singleton} from './routes';

export const navRoutes={
	"Productos" : function(){routes_singleton.getInstance().setState(routes.ADMIN_MENU)},
	"Crear producto" : function(){routes_singleton.getInstance().setState(routes.INSERT_PRODUCT)},
	"Usuarios" : function(){routes_singleton.getInstance().setState(routes.AMDIN_USER)},
	"Salir" : function(){routes_singleton.getInstance().setState(routes.LOGIN)},
	}