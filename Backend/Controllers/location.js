const locations=require('../Models/location');


exports.getLocations=(req,res)=>{
    locations.find().then(result=>{
        res.status(200).json({
            message:"locations successfully fetched from DB",
            data:result
        })
    }).catch(error=>{
        res.status(500).json({
            message:"locations not found",
            error:error
        })
    });
}

exports.getLocationByName=(req,res)=>{
    var name=req.params.name;
    var filter={ name: { $regex: '.+\, '+name } }
    locations.find(filter).then(result=>{
        res.status(200).json({
            message:"locations successfully fetched from DB",
            data:result
        })
        console.log(result)
    }).catch(error=>{
        res.status(500).json({
            message:"locations not found",
            error:error
        })
    })   
}