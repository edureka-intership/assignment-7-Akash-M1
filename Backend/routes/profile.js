const express=require('express')
const profileCont=require('../Controllers/profile')

const routes=express.Router();

routes.get('/',profileCont.showAllDetails);


module.exports=routes;