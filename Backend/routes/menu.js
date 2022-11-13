const express=require('express');
const menuController=require('../Controllers/menu')
const route=express.Router();


route.get('/',menuController.getAllMenu);
route.get('/:rName',menuController.getMenuByRestName);

module.exports=route;