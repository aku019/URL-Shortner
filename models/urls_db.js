const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true


    },
    urls: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('URL', urlSchema);
