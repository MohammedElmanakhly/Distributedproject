var express = require('express');
var router = express.Router();
const control = require('../controllers/employee');


router.post('/addEmployee', control.addEmployee);


router.get('/getEmployee', control.getEmployee);


router.patch('/updateEmployee/:id', control.updateEmployee);


router.delete('/deleteEmployee/:id', control.deleteEmployee);

module.exports = router;
