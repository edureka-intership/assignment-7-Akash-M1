const express=require('express');
const locationController=require('../Controllers/location')

const router=express.Router();

router.get('/',locationController.getLocations);
router.get('/:name',locationController.getLocationByName);

module.exports=router;