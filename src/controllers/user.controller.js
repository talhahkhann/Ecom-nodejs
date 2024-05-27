const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const UserController  = {
    createAccount: async function(req , res){
        try{
                const userData = req.body;
                const newUser = new UserModel(userData);
                await newUser.save();
                return res.json({success: true , data: newUser , message: "User created!"});

        }
        catch(ex){
            return res.json({success:false , message: ex});
            
        }
    },

    singIn: async function(req , res){
        try{
                const {email , password} = req.body;
                const foundUser = await UserModel.findOne({email: email});
                if(!foundUser){
                    return res.json({success:false , message:"User not Found"});
                }
                const passwordMatch = bcrypt.compareSync(password ,foundUser.password);
                if(!passwordMatch){
                    return res.json({success: false , message:"Password Incorrect"});
                }
                return res.json({sucess:true , message:"Password matched"});
                    }
        catch(ex){

        }

    }
};

module.exports = UserController;