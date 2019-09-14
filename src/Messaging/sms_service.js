const axios = require('axios');

const apiKey = 'Ac516e98b0f3377cb0b4bd431f5ee4688';
const senderID = 'ADINFINI';

const sendSMS = (HR_PH_NUM, responseMsg) => {

    const message = 'hello';

    var options = {
        method: 'POST',
        url: `https://api-alerts.kaleyra.com/v4/`,
        params: {
            api_key: apiKey,
            method: 'sms',
            message: message,
            to: '9976650426',
            sender: senderID
        }
    };

    axios(options).then((res) => {
        console.log(res);
         
    }).catch((err) => {
        throw new error(err);
    });
}

module.exports = {
    sendSMS
};