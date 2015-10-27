/*var express = require('express');
var nodemailer=require('nodemailer');
var app=express();

var transporter=nodemailer.createTransport({
	service:'Gmail',
	auth:{
		user:'abhikori1994@gmail.com',
		pass:'abhishekori#gmailp@ssword1994'
	}
});

var mailOptions={
	from:'Abhi <abhikori1994@gmail>',
	to:'abhikori123@gmail.com',
	subject:'hai from node',
	text:'hai man how are you doing?',
	html:'<b>Call me may be!</b>'
}

transporter.sendMail(mailOptions,function(error,info){
	if(error){
		return console.log(error);
	}
	console.log("Message sent:"+info.response);
});

app.listen(3000,function(){
console.log("yes");	
})
*/
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport("SMTP",{
    service: 'Gmail',
    auth: {
        user: 'abhikori1994@gmail.com',
        pass: 'abhishekori#gmailp@ssword1994'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <abhikori1994@gmail>', // sender address
    to: 'abhikori1994@gmail', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});