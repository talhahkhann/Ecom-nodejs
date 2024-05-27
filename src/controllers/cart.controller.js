const CartModel = require('./../models/cart.model');

const CartController = {
    addtoCart: async function(req, res){
        try{

            const {user , product , quantity} = req.body;
            const foundCart = await CartModel.findOne({user:user});
            if(!foundCart){
                const newCart = new CartModel({user : user});
                newCart.items.push({
                    product:product,
                    quantity:quantity,

                });
                await newCart.save();
                return res.json({success:true , message:"Cart is created " , data:newCart});
            }
            const UpdatedCart = await CartModel.findOneAndUpdate({user : user},
                    {$push:{items :{product : product , quantity:quantity}}},
                    {new:true},

            )
            return res.json({success:true , message:"Updated Cart" , data: UpdatedCart});

        }catch(ex){
            return res.json({success:false , message:ex})
        }
        
    },
    removetoCart : async function(req , res){
        try{
               const { user , product} = req.body;
               

               const updatedCart = await CartModel.findOneAndUpdate(
                {user:user},
                {$pull:{items:{product:product}
            }
                              
            },
            {
                new : true
            }
            
               )
               return res.json({success:true , message:"Product is Deleted" , data: updatedCart })
               
        }
        catch(ex){
            res.json({success:false , message:ex})
        }
    },
    getCartforUser: async function(req , res){
            try{
                const user = req.params.user;
                const findCart = await CartModel.findOne({user : user});
                return res.json({success:true , message:'User Cart' , data: findCart});
            }catch(ex){
                return res.json({success:true , message:ex})
            }
    }

}
module.exports = CartController;