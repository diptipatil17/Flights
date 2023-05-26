const express =require('express');

const {AirplaneController} = require('../../controllers')
const {AirplaneMiddlewares}=require('../../middlewares')

const router=express.Router();

// router.post('/', AirplaneController.createAirplane);

// /api/v1/airplanes post
router.post('/',AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

// /api/v1/airplanes/ get
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id get
router.get('/:id', AirplaneController.getAirplane)

module.exports=router;