const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
const cookies = cookieParser();

const { getHomePage, deleteSecret } = require('./routes/home');
const { getSession, removeSession } = require('./model/sessions'); //getSession(sid), removeSession(sid);

server.use(cookies); //pass cookieParser to all reoutes with req object
server.use(sessions); //calls next inside session()

server.get('/', getHomePage);
server.post('/', deleteSecret);
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

function sessions(req, res, next) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    if (session) {
        const expiry = new Date(session.expires_at);
        const today = new Date();
        if (expiry < today) {
            removeSession(sid);
            res.clearCookie('sid');
        } else {
            req.session = session;
        }
    }
    next();
}

module.exports = server;
