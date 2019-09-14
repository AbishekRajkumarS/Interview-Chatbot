const axios = require('axios');
var FormData = require('form-data');

const verify = (details) => {
    
    const jobTitle = details.jobTitle;
    const date = details.date.slice(0,10);
    // const time = details.time.slice(11,16);
    const interviewerEmail = details.interviewer;
    const candidateEmail = details.candidate;
    const unit = details.duration.unit;
    let duration;
    if(unit == "h") {
        duration = (details.duration.amount) * 60;
    }
    else if(unit == "s"){
        duration = (details.duration.amount) / 60;
    }
    else {
        duration = details.duration.amount;
    }
    const phoneNumber = '9976650426';

    // let bodyFormData = new FormData();
    // bodyFormData.append('selectedDescription', jobTitle);
    // bodyFormData.append('selectedDate', date);
    // bodyFormData.append('selectedInterviewer', interviewerEmail);
    // bodyFormData.append('selectedCandidate', candidateEmail);
    // bodyFormData.append('selectedDuration', duration);
    // bodyFormData.append('userPhone', phoneNumber);


    const form = {
        selectedDescription: jobTitle,
        selectedDate: date,
        selectedInterviewer: interviewerEmail,
        selectedCandidate: candidateEmail,
        selectedDuration: duration,
        userPhone: phoneNumber
    }

    // // var formData = querystring.stringify(form);
    
    // var options = {
    //     method: 'POST',
    //     url: `https://www.inpiq.com/Schedule/addFromBot`,
    //     data: bodyFormData,
    //     headers: { 
    //         'Postman-Token': '3f975a13-2406-4885-a1d6-6d876d28d54f',
    //         'cache-control': 'no-cache',
    //         'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    //     }
    // };

    

    // axios(options).then((res) => {
    //     console.log(res);
    //     return res;
    // }).catch((err) => {
    //     throw new error(err);
    // });

    var request = require("request");

    var options = { 
        method: 'POST',
        url: 'https://www.inpiq.com/Schedule/addFromBot',
        headers: { 
            'Postman-Token': '3f975a13-2406-4885-a1d6-6d876d28d54f',
            'cache-control': 'no-cache',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        formData: form
    };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });
};

module.exports = {
    verify
};