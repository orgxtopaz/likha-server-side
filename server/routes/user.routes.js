
const signUp = require('../controller/signUp_controller');


const router = require('express').Router();





////ALL OFFICIALS FUNCTIONALITIES
router.post('/signUp',signUp); ///TIME IN  






module.exports = router;