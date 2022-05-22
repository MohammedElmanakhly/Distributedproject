const mongoose = require('mongoose');
const managerSchema = mongoose.Schema({
    managername: {
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
    employee: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
        },
    ]
});

module.exports = mongoose.model('Manager', managerSchema);