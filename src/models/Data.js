const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        angry: Number,
        disgust: Number,
        fear: Number,
        happy: Number,
        neutral: Number,
        sad: Number,
        surprise: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Data = mongoose.model('Data', dataSchema);

export default Data;