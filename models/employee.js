const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    employeename: {
        type: String,

    },
    dept: {
        type: String,

    },
    phone: {
        type: String,

    },
    address: {
        type: String,
    },
    department: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
        },
    ]

});

module.exports = mongoose.model('Employee', employeeSchema);