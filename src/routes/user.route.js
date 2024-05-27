const UserRoutes = require('express').Router();
const UserController = require('./../controllers/user.controller')

UserRoutes.post("/createAccount" , UserController.createAccount); 
module.exports = UserRoutes;

UserRoutes.post("/singIn" , UserController.singIn)