const express=require('express');
const restControllers=require('../Controllers/restaurant');

const routes=express.Router();

routes.get('/',restControllers.getRestaurants);
routes.post('/',restControllers.getRestaurantByNameCity);
routes.get('/restaurantDetails/:name',restControllers.getRestaurantByName);
routes.get('/:id',restControllers.getRestaurantById);
routes.post('/filter/:page',restControllers.getRestaurantByFilter);

module.exports=routes;