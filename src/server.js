const express = require('express');

const server = express();
server.get('/', (req, res) => {
    //html page
    res.send(' <h1>Welcome to our project</h1>');
});
// add sign-up callback function
//server.get('/sign-up', signUp_callback); //html page

// add sign-in callback function
//server.get('/sign-in', signUIn_callback); //html page

// add log-out callback function
//server.post('/log-out', logOut_callback);

// add secret //if not signed-in this route shouldn't be allowed to see !!!
//server.get('/add-secret', add_callback);  //html page with form to add new secret
//server.post('/add-secret', add_callback); //callback handles the inputs

// delete
//server.post('/delete-secret', delete_callback); //delete_callback should listen to req and in model folder in file should delete post from db

module.exports = server;
