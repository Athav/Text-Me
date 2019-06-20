// //Dependencies
// const express = require('express');
// const http = require('http');
// //Port number

// const port = process.env.PORT || 3000;

// //Express
// var app = express();

// app.get('/', (req, res) => {
//     // res.render('home.hbs', {
//     //     pageTitle: 'Home Page',
//     //     welcomeMessage: 'Welcome to my website'
//     // });
//     res.send('Home');
// });

// app.get('/about', (req, res) => {
//     // res.render('about.hbs', {
//     //     pageTitle: 'About Page'
//     // });
//     res.send('about');
// });


// // /bad - send back json with errorMessage
// app.get('/bad', (req, res) => {
//     res.send('Unable to handle badrequest');
// });


// //Listening server
// app.listen(port, () => {
//     console.log(`Server is up on port ${port}`);
// });

const http = require('http');
const app = require('./backend/app');
// Listening port
const port = process.env.port || 3000;
app.set('port', port);
// Creating server
const server = http.createServer(app);

// Listening the Server
server.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
});
