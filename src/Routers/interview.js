const express = require('express');
const {interviewDetailEmail} = require('../Messaging/email_service');
const {sendSMS} = require('../Messaging/sms_service')
const {verify} = require('../Messaging/to_admin_message');
const interview = require('../Models/interview_details');
const EmailCheckApi = require('../apiKey');
var quickemailverification = require('quickemailverification').client(EmailCheckApi).quickemailverification();

const router = new express.Router();

router.post('/', async(req, res) => {
    const details = req.body.queryResult.parameters;
    const phNum = req.body.queryResult.parameters.phoneNum;
    const newInterview = new interview(details);
    try {
        let interviewer = req.body.queryResult.parameters.interviewer;
        let candidate = req.body.queryResult.parameters.candidate;
        await quickemailverification.verify(interviewer, (err, response_1) => { 
            let result = response_1.body.result;
            if (result == 'invalid') {
                return res.send(response_1.body);
            }
            quickemailverification.verify(candidate, (err, response_2) => { 
                let result = response_2.body.result;
                if (result == 'invalid'){
                    return res.send(response.body);
                }
                newInterview.save((err, result) => {
                    if(err) {
                        console.log(err);
                    }    
                    interviewDetailEmail(details);
                    const verificationMessage = verify(details); 
                    sendSMS(phNum, verificationMessage);
                    res.send({
                        "fulfillmentText": "Your interview was booked succesfully!!!",
                        "outputContexts": [result]
                    }); 
                });
            });
        });
    }catch(e) {
        res.send(e);
    }
})

module.exports = router;

