var express = require('express');
var router = express.Router();
const control = require('../controllers/manager');


router.post('/addManager', control.addManager);


router.get('/getManager', control.getManager);


router.patch('/updateManager/:id', control.updateManager);


router.delete('/deleteManager/:id', control.deleteManager);

module.exports = router;
