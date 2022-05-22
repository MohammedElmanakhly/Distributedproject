var express = require('express');
var router = express.Router();
const control = require('../controllers/department');


router.post('/addDepartment', control.addDepartment);


router.get('/getDepartment', control.getDepartment);


router.patch('/updateDepartment/:id', control.updateDepartment);


router.delete('/deleteDepartment/:id', control.deleteDepartment);

module.exports = router;
