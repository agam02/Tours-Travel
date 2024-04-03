import Tour from "../models/Tour.js";

//create new tour
export const createTour =async(req,res)=>{
    const newTour = new Tour(req.body);
    try{
        const savedTour =await newTour.save()
        res.status(200).json({success:true,message:'Successfully created',
    data:savedTour});
    } catch(err){
        res.status(500).json({
            success:false,
            message:'fail to create'});
    }
};


//update tour
export const updateTour =async (req,res) =>{
    const id = req.params.id
    try{
        const updateTour =await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'Successfully updated',
        data:updatedTour,
    });

    }catch(err){

        res.status(500).json({
            success:false,
            message:'fail to update'})
    }
};
//delete tour

export const deleteTour =async (req,res) =>{
    const id = req.params.id
    try{
        await Tour.findByIdAndDelete(id)
        

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
//get single tour


export const getSingleTour =async (req,res) =>{
   
    const id = req.params.id
    try{
        const tour =await Tour.findById(id)
        

        res.status(200).json({
            success:true,
            message:'found',
       data:tour,
    });

    }catch(err){

        res.status(404).json({
            success:false,
            message:'not found',
            data:tour
        })
    }
};

// getALL tour
export const getAllTour= async (req,res) =>{
    const page =parseInt(req.query.page)
    
     try{
 
         const tours =await Tour.find({}).populate('reviews')
         .skip(page * 8)
         .limit(8);
        
         res.status(200).json({
             success:true,
             count:tours.length,
             message:'sucessful',
        data:tours,
     });
     }catch(err){
         res.status(404).json({
             success:false,
             message:'not found',
           
         })
        }
    };





  
//get tour by search
export const getTourBySearch = async(req,res)=>{

const city =new RegExp(req.query.city, 'i')
const distance = parseInt(req.query.distance)
const maxGroupSize = parseInt(req.query.maxGroupSize)


try{

    //gte means greater than  equal
const tours =await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte :maxGroupSize},
})

res.status(200).json({
    success:true,
    
    message:'sucessful',
data:tours,
});
}catch(err){
    res.status(404).json({
        success:false,
        message:'not found',
      
    })
}

};

//feature tour

export const getFeaturedTour= async (req,res) =>{
    
    
     try{
 
         const tours =await Tour.find({featured:true})
         .populate('reviews')
        .limit(8);
        
         res.status(200).json({
             success:true,
           
             message:'sucessful',
        data:tours,
     });
     }catch(err){
         res.status(404).json({
             success:false,
             message:'not found',
           
         })
        }
    };
//get tour counts


 export const getTourCount =async(req,res)=>{
    try{
        const tourCount =await Tour.estimatedDocumentCount()
        res.status(200).json({success:true, data:tourCount})
    }catch(err){
        res.status(500).json({success:false, mesage:"failed to fetch"})
    }
 };