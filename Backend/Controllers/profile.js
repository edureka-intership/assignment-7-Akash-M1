const locDet=require('../Models/location');


exports.showAllDetails=(req,res)=>{
    locDet.find().then(result=>{
        res.render('profile',{result});
    }).catch(err=>{
        res.status(500).json({
            message:"Hello This is Error",
            err:err
        })
    })
}