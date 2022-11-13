const mealData=require("../Models/mealtype");

exports.getMealTypes=(req,res)=>{
    mealData.find().then(result=>{
        res.status(200).json({
            message:"DB Fetch Successfull",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"DB Fetch Error",
            error:err
        })
    })
}