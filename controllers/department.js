const Dept = require('../models/department');


addDepartment = function (req, res, next) {
    const department = new Department({
        deptename: req.body.deptname,
        deptno: req.body.deptno,


    });
    department.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Department Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Department Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getDepartment = function (req, res, next) {
    Department.find().then(resault => {
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



updateDepartment = function (req, res, next) {
    const newDepartment = {
        deptname: req.body.deptname,
        deptno: req.body.deptno,


    }
    Department.updateOne({ _id: req.params.id }, { $set: newDepartment }).
        then(resault => {
            res.status(200).json({
                massage: 'Department updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteDepartment = function (req, res, next) {
    Department.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Department deleted Successfully',
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
    addDepartment: addDepartment,
    getDepartment: getDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment
}