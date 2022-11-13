const mongoose=require('mongoose')

const mealData=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

});

module.exports=mongoose.model('MealType',mealData,'mealtype');