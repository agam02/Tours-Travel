import User from "../models/User.js";

//create new tour
export const createUser =async(req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser =await newUser.save()
        res.status(200).json({success:true,message:'Successfully created',
    data:savedUser,});
    } catch(err){
        res.status(500).json({
            success:false,
            message:'fail to create',
            data:savedUser,});
    }
}


//update tour
export const updateUser =async (req,res) =>{
    const id = req.params.id
    try{
        const updateUser =await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'Successfully updated',
        data:updatedUser,
    });

    }catch(err){

        res.status(500).json({
            success:false,
            message:'fail to update',
        data:updatedUser,})
    }
};
//delete tour
export const deleteUser =async (req,res) =>{
    const id = req.params.id
    try{
        const deleteUser =await User.findByIdAndDelete(id)
        

        res.status(200).json({
            success:true,
            message:'Successfully deleted',
       
    });

    }catch(err){

        res.status(500).json({
            success:false,
            message:'fail to delete',
        })
    }
};
//getall user

export const getAllUser =async (req,res) =>{
   
   
    try{
        const user =await user.find({})
        

        res.status(200).json({
            success:true,
            message:'Successful',
       data:user
    });

    }catch(err){

        res.status(404).json({
            success:false,
            message:'not found',
            data:User
        })
    }
};
//get single tour
export const getSingleUser =async (req,res) =>{
   
    const id = req.params.id
    try{
        const user =await User.findById(id)
        

        res.status(200).json({
            success:true,
            message:'found',
       data:user
    });

    }catch(err){

        res.status(404).json({
            success:false,
            message:'not found',
            data:User
        })
    }
};

//
export const getFeaturedUser =async (req,res) =>{
   //for pagination
   const page =parseInt(req.query.page)
   
    try{

        const Users =await User.find({}).skip(page *8).limit(8);
       
        res.status(200).json({
            success:true,
            count:tours.length,
            message:'sucessful',
       data:Users,
    });
    }catch(err){
        res.status(404).json({
            success:false,
            message:'not found',
          
        })
    }
};