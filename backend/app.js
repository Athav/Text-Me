// Dependencies fo rexpress, mongoose, body parser
const express = require('express');
const mongo = require('mongoose');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// Mailer Package

const nodemailer = require('nodemailer');
// Seeting mail instances
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'athavan19794@gmail.com',
        pass: 'Athavan61*'
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Variabl for express
const app = express();

// Requiring schema models
// const User = require('./models/registerUser');

// Connection to mongodb
mongo.connect("mongodb+srv://Athavan:Athavan61@cluster0-vsisj.mongodb.net/textchat?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database");
    }).catch(() => {
        console.log("Failed to connect");
        console.log("Please check mongodb service:");
        console.log("run *sudo service mongodb start* in terminal");
    });

//Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Adding headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, PATCH, DELETE, OPTIONS"
    );
    //Without calling next() it'll not run
    next();
});
app.get('/', (req, res, next) => {
    // res.write('Hello Athav...')
    res.send('Hello athav...');
})
// Register User: 
// app.post('/registerUser', (req, res, next) => {
//   const user = new User({
//     userEmail: req.body.userEmail,
//     userMobile: req.body.userPass,
//     Otp: req.body.otp
//   });
//   user.save().then(result => {
//     console.log('User added successfully');
//     res.status(201).json({
//       msg: 'User added successfully',
//       userDetails: result
//     });
//     // Setting Address to send mail
//     let SendTo = {
//       from: 'athavan19794@gmail.com',
//       to: req.body.userEmail,
//       subject: 'Verification Code',
//       text: `You are registered successsfully \n
//              Verification OTP: \n
//             username: ${req.body.otp}\n`
//     };
//     // Sending the mail
//     transporter.sendMail(SendTo).then(send => {
//       console.log(`Otp mail has been send: \n ${SendTo.to}`);
//     }).catch(error => {
//       console.log(`Can not send otp mail to: ${SendTo.to}`);
//       console.log(`Because ${error}`);
//     });
//   }).catch(err => {
//     console.log(err);
//     res.json({
//       msg: 'Can not register'
//     });
//   });
// })


// app.use("", UserRoutes);
module.exports = app;