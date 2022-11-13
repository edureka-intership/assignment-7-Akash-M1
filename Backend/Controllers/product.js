const restaurantData=require('../Models/restaurant');
const mealData=require('../Models/mealtype')


exports.getRestaurantProductDetails=(req,res)=>{
    var restName=req.params.rname;
    var filter={
        name:restName
    }
    var filter1={"type.name":1,_id:0}

    restaurantData.find(filter,filter1).then(result=>{
        var rnames=[];
        var types=result[0].type;
        for(i=0;i<types.length;i++){
            rnames[i]=((result[0].type[i].name).charAt(0).toUpperCase())+ (result[0].type[i].name).slice(1);
        }

        var ifilter={name:{$in:rnames}};

        mealData.find(ifilter).then(iresult=>{
            res.status(200).json({
                message:"Successfull Fetch",
                data:iresult
            })
        }).catch(err=>{
            res.status(500).json({
                message:"Error in Fetch",
                error:err
            })
        })
    }).catch(err=>{
        res.status(500).json({
            message:"Error in Fetch",
            error:err
        })
    })

}