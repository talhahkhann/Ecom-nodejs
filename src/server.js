const express  = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 9000;
const mongoose = require('mongoose');
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended : false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
const UserRoutes = require('./routes/user.route');
const CategoryRoutes = require('./routes/category.route');
const ProductRoutes = require('./routes/product.route');
const CartRoutes = require('./routes/cart.route');
const OrderRoutes = require('./routes/order.route');
app.use('/api/category' , CategoryRoutes);
app.use('/api/product' , ProductRoutes);
app.use('/api/user', UserRoutes),
app.use('/api/cart' , CartRoutes),
app.use('/api/order' , OrderRoutes),
mongoose.connect('mongodb+srv://Ecom-Database:Talha123@cluster0.jdyhdt1.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
console.log("Connection build");
// app.get('/', function(req , res){
//     res.json({success:true , message : "Hellow World"});
// });


app.listen(PORT  , ()=> console.log(`Server started at PORT: ${PORT}`));



