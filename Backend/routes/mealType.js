const express=require("express");
const mealController=require("../Controllers/mealType")

const routes=express.Router();


routes.get('/',mealController.getMealTypes);

module.exports=routes;