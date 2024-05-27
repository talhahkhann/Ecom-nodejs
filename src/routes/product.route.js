const ProductRoutes = require('express').Router();
const ProductController = require('../controllers/product.controller');


ProductRoutes.post('/' , ProductController.createProduct);
ProductRoutes.get('/' , ProductController.fetchAllProduct);
ProductRoutes.get('/category/:id' , ProductController.fetchAllProductbyCategory);
ProductRoutes.get('/:id' , ProductController.fetchProductByID);
module.exports = ProductRoutes;