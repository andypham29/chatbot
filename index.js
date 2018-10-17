const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get('/', function(req,res){
    res.send("chatbot");
});

//facebook handshake
app.get('/webhook/', function(req,res){
   if(req.query['hub.verify_token'] === "helloworld"){
       res.send(req.query['hub.challenge']);
   }
   res.send("Wrong token");
});

app.listen(app.get('port'), function(){
    console.log('chat bot running on: port');
});

