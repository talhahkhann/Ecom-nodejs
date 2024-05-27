const CartRoutes = require('express').Router();
const CartController = require('../controllers/cart.controller');


CartRoutes.post('/' , CartController.addtoCart);
CartRoutes.delete('/' , CartController.removetoCart);
CartRoutes.get('/:user' , CartController.getCartforUser); 
module.exports  = CartRoutes;