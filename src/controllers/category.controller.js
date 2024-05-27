const CategoryModel = require("../models/category.model");

const CategoryController = {
    createCategory : async function ( req , res){
      try{
            const categoryData = req.body;
            const makeCategory = new CategoryModel(categoryData);
            makeCategory.save();
            return res.json({success : true , message : 'Category Created' , data : categoryData});
      }catch(ex){
        return res.json({ success : false  , messgae:ex})
      }

    },
    fetchAllCategory : async function ( req ,  res){
         try{
          const categories = await CategoryModel.find();
          return res.json({Sucess:true , data : categories , messgae:"Found Categories"});

         }catch(ex){
          return res.json({Sucess:false , message:"Not Found Categories"});
         }
    },
    fetchCategoryById: async function( req , res){
        try{
            const id  = req.params.id;
            const findbyid = await CategoryModel.findById(id);
            return res.json({Sucess:true, data : findbyid , message:'Found By ID'});
        }catch(ex){
          return res.json({Success:false , messgae: 'Not Found by ID'});
        }
    }
};


module.exports = CategoryController;