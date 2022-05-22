const mongoose = require('mongoose');
const deptSchema = mongoose.Schema({
    deptname: {
        type: String,

    },
    deptno: {
        type: String,

    },
    employee: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
        },
    ]


});

module.exports = mongoose.model('Department', deptSchema);