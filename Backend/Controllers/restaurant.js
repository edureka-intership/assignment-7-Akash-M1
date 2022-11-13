const restaurantData=require('../Models/restaurant');


async function findPromise(){
    let restOut;
    try{
        restOut=await restaurantData.find();
    }
    catch(error){
        console.log(error);
    }
    finally{
        return restOut;
    }
}

exports.getRestaurants=(req,res)=>{
    findPromise().then(result=>{
        res.status(200).json({
            message:'Restaurants fetched successfully',
            data:result
        })
    }).catch(err=>{
            res.status(500).json({
                message:'Restaurant not found',
                error:err
            })
    })
}

exports.getRestaurantByName=(req,res)=>{
    var name=req.params.name;
    var filter={
        name:name
    };
    restaurantData.find(filter).then(result=>{
        res.status(200).json({
            message:"DB Fetch Successfull",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"DB fetch Error",
            error:err
        })
    })
}



exports.getRestaurantById=(req,res)=>{
    var id=req.params.id;
    var filter={city:id};
    restaurantData.find(filter).then(result=>{
        res.status(200).json({
            message:"DB Fetch Successfull",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"DB Fetch Failed",
            error:err
        })
    })
}

exports.getRestaurantByNameCity=function(req,res){
    var filter={

    }
    if(req.body.city_name && req.body.name){
        filter.city_name=req.body.city_name;
        filter.name=req.body.name;
    }

    restaurantData.find(filter).then(result=>{
        res.status(200).json({
            message:"Successfull Fetch",
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"Error in Fetch",
            error:err
        })
    })
}

exports.getRestaurantByFilter=(req,res)=>{
    var pgNo=req.params.page;
    var filter={

    }
    if(req.body.city_id){
        filter.city=req.body.city_id;
    }
    if(req.body.Cuisine && req.body.Cuisine.length>0){
        filter['Cuisine.name']={
            "$in":req.body.Cuisine
        }
    }
    if(req.body.lcost && req.body.hcost){
        filter.cost={
            "$lt":req.body.hcost,
            "$gt":req.body.lcost
        }
    }

    restaurantData.find(filter).limit(2).skip((2*pgNo)-2).sort(req.body.sort).then(result=>{
        res.status(200).json({
            message:`Data Fetched from ${pgNo}`,
            data:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"DB Fetch Failed",
            error:err
        })
    })
}