menuData=require('../Models/menu');

exports.getAllMenu=(req,res)=>{
    menuData.find().then(result=>{
        res.status(200).json({
            message:"DB Fetch Successfull",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"DB Fetch Unsuccessfull",
            error:err
        })
    })
}


exports.getMenuByRestName=(req,res)=>{
    const name=req.params.rName;
    menuData.find({restaurantName:name}).then(result=>{
        res.status(200).json({
            message:"DB Fetch Successfull",
            data:result
        })
    }).catch(err=>{
        res.status(200).json({
            message:"DB Fetch Error",
            error:err
        })
    })

}