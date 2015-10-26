var express = require('express');
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
