const OrderModel = require('./../models/order.model');

const OrderController = {
    createOrder: async function(req, res){
        try{

            const {user , items} = req.body;
            const newOrder = new OrderModel({
                user:user,
                items:items,
            });
            await newOrder.save();
            return res.json({success:true , message:"Order Created" , data: newOrder});
          

        }catch(ex){
            return res.json({success:false , message:ex})
        }
        
    },
  

}
module.exports = OrderController;