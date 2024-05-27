const CategoryRoutes = require('express').Router();
const CategoryController = require('../controllers/category.controller');

CategoryRoutes.post('/' , CategoryController.createCategory);
CategoryRoutes.get('/' , CategoryController.fetchAllCategory);
CategoryRoutes.get('/:id' , CategoryController.fetchCategoryById);
module.exports = CategoryRoutes;