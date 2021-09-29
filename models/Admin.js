const { Schema, model } = require('mongoose')
const AdminSchema = new Scheama({
    USERNAME: {
        type: String,
        unique: true,
        required: true,
    },
    MAIL: {
        type: String,
        unique: true,
        required: true,
    },
    PASSWORD: {
        type: String,
        required: true,
        minLength:3
    }
})
module.exports = model("admin", AdminSchema)