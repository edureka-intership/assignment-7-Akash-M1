const express=require('express');
const prodCont=require('../Controllers/product');


const routes=express.Router();

routes.get('/:rname',prodCont.getRestaurantProductDetails);

module.exports=routes;