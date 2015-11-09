var express = require('express');
var app = express();

//var cors = require('cors');
//app.use(cors());

var bodyParser=require('body-parser');
var nodeMailer= require('nodemailer');





app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.post('/send',function (req,res) {
//	if(!req.body) return res.sendStatus(400);

	console.log(req.body);
var smtpTransport = nodeMailer.createTransport("SMTP",{
    service: "Yahoo",
    auth: {
        user: req.body.emailId,
        pass: req.body.emailPassword
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: req.body.emailId, // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plaintext body
    html: "<H1>Hello world ✔</H1>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
        res.send(error);
    }else{
        console.log("Message sent: " + response.message);
        res.send("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});

});

app.listen(8081);
console.log("running");