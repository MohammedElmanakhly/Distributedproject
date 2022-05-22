const Manager = require('../models/manager');


addManager = function (req, res, next) {
    const manager = new Manager({
        managername: req.body.managername,
        dept: req.body.dept,
        phone: req.body.phone,
        address: req.body.address,
        employee: req.body.employee
    });
    manager.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Manager Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Manager Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getManager = function (req, res, next) {
    Manager.find().then(resault => {
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



updateManager = function (req, res, next) {
    const newManager = {
        managername: req.body.managername,
        dept: req.body.dept,
        phone: req.body.phone,
        address: req.body.address,
        employee: req.body.employee
    }
    Manager.updateOne({ _id: req.params.id }, { $set: newManager }).
        then(resault => {
            res.status(200).json({
                massage: 'Manager updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteManager = function (req, res, next) {
    Manager.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Manager deleted Successfully',
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
    addManager: addManager,
    getManager: getManager,
    updateManager: updateManager,
    deleteManager: deleteManager
}