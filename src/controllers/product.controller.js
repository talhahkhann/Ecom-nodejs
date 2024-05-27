const ProductModel = require('../models/product.model');

const ProductController = {
    createProduct : async function(req, res){
        try{
            const productdata = req.body;
            const makeproduct = new ProductModel(productdata);
            makeproduct.save();
            return res.json({success : true , message : "Product Created"});
        }catch(ex){
          return res.json({success: false , message:ex})  
        }
    },
    fetchAllProduct: async function(req, res){
        try{
            const fetchProduct = await ProductModel.find();
            return res.json({success : true , message : "All Products" , data:fetchProduct});
            
        }catch(ex){
            return res.json({success : false  , message : ex});
        }
    },
    fetchProductByID : async function (req , res){
            try{
                const productId = req.params.id;

                const fetchbyIdProduct = await ProductModel.findById(productId);
                return res.json({success:true , message: "Product by ID" , data:fetchbyIdProduct});
            }catch(ex){
                return res.json({success:false , message : ex});
            }
    },
    fetchAllProductbyCategory : async function(req , res){
            try{
                const categoryId = req.params.id;
                const fetchProductCategory = await ProductModel.findById(categoryId);
                return res.json({
                    success: true , data:fetchProductCategory , message: 'Product Fetch by Category ID'
                })
            }catch(ex){
                return res.json({success : false ,  message : ex});
            }

    }
}

module.exports = ProductController;