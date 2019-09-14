const mongoose = require('mongoose');
const validator = require('validator');

const interviewSchema = new mongoose.Schema({
    interviewer: {
        type: String,
        required: [true, 'Enter the email id'],
        isEmail: [true, 'Invalid Email']
    },
    candidate: {
        type: String,
        required: [true, 'Enter the email id'],
        isEmail: [true, 'Invalid Email']
    },
    date:{
        type: Date,
        requires: [true, 'Enter the date']
    },
    time:{
        type: Date,
        requires: [true, 'Enter the time']
    },
    duration:{
        type: Array,
        required: [true, 'Enter the duration'],
    },
    jobTitle:{
        type: String,
        required: [true, 'Enter the job title']
    }
},{
    timestamps: true
})

const interview = mongoose.model('interview', interviewSchema, 'InterviewesDetails');

module.exports = interview