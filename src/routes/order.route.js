const OrderRoutes = require('express').Router();
const OrderController = require('../controllers/order.controller');

OrderRoutes.post('/' , OrderController.createOrder);
module.exports  = OrderRoutes;