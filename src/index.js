const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routers/interview');
require("./DataBase/mongoose");
const API_KEY = require('./apiKey');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(router)

app.listen((process.env.PORT || 8000), () => {
    console.log("App is up and running...");
});