'use strict';

var aws = require('aws-sdk');
var path = require('path');
var pathToJson = path.resolve(__dirname, './config.json')

aws.config.loadFromPath(pathToJson);

const interviewDetailEmail = (details) => {
  const date = details.date.slice(0,10) + " (YYYY/MM/DD)";
  const time = details.time.slice(11,16);
  const sender = "abishek.rajkumar2000@gmail.com";
  const interviewer = details.interviewer;
  const candidate = details.candidate; 
  const recipient = [interviewer, candidate];

  const configuration_set = "test-chatbot";

  const subject = "An interview";

  const body_text = "Inpiq online interviewing platform\r\n"
                  + `Greeting, an interview has been scheduled for you on ${date} at ${time}. For the job title ${details.jobTitle}`
              
  const body_html = `<html>
  <head></head>
  <body>
    <h1>Inpiq online interviewing platform</h1>
    <p>Greeting, an interview has been scheduled succefully today.
  And the below given details are the details of the interview.</p>
    <h2>Details of interview:</h2>
    <ul>
      <li>Interviewer Email: ${details.interviewer}.</li>
      <li>Candidate Email: ${details.candidate}.</li>
      <li>Date: ${date}.</li>
      <li>Time: ${time}.</li>
      <li>Duration: ${details.duration.amount} ${details.duration.unit}.</li>
      <li>Job Title: ${details.jobTitle[0]}.</li>
    </ul>
    <p>For more information vist our website <a href="https://inpiq.com/">here</a>.</p>
    <p>We hope that the interview will be smooth and a plesent one.</p>
  </body>
  </html>`;

  const charset = "UTF-8";

  var ses = new aws.SES();

  var params = { 
    Source: sender,
    Destination: { 
      ToAddresses: recipient,
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset 
        },
        Html: {
          Data: body_html,
          Charset: charset
        }
      }
    },
    ConfigurationSetName: configuration_set
  };
    ses.sendEmail(params, function(err, data) {
      if(err) {
        console.log(err.message);
      } else {
        console.log("Email sent! Message ID: ", data.MessageId);
      }
    });
}

module.exports = {
  interviewDetailEmail
};