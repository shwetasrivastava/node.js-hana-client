const express = require('express');
const app = express();
const hanaClient = require("@sap/hana-client");
const connectionParams = require('./app/configs/dbConnection.js');

app.set("port",process.env.PORT || 3000);

const connection = hanaClient.createConnection();
connection.connect(connectionParams, (err) => {
    if(err){
        console.error("Connection error",err);
    }
    else{
        console.log("Established successfully");
    }

});
global.connection = connection;

module.exports = app;