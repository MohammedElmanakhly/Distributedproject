const Manager = require('../models/employee');


addEmployee = function (req, res, next) {
    const employee = new Employee({
        employeename: req.body.employeename,
        dept: req.body.dept,
        phone: req.body.phone,
        address: req.body.address,

    });
    employee.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Employee Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Employee Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getEmployee = function (req, res, next) {
    Employee.find().then(resault => {
        res.status(200).json({
            massage: resault
        });
    }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}



updateEmployee = function (req, res, next) {
    const newEmployee = {
        employeename: req.body.employeename,
        dept: req.body.dept,
        phone: req.body.phone,
        address: req.body.address,

    }
    Employee.updateOne({ _id: req.params.id }, { $set: newEmployee }).
        then(resault => {
            res.status(200).json({
                massage: 'Employee updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteEmployee = function (req, res, next) {
    Employee.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Employee deleted Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addEmployee: addEmployee,
    getEmployee: getEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}