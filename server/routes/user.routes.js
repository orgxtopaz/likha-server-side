
const signUp = require('../controller/signUp_controller');


const router = require('express').Router();





////ALL OFFICIALS FUNCTIONALITIES
router.post('/signUp',signUp); ///TIME IN  
router.get('/', (req, res) => {
  res.send('hello world')
})





module.exports = router;
