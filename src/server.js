const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = express.urlencoded({ extended: false });

const server = express();
const cookies = cookieParser(process.env.COOKIE_SECRET); //process.env.COOKIE_SECRET

const { getHomePage, deleteSecret } = require('./routes/home');
const { getSession, removeSession } = require('./model/sessions'); //getSession(sid), removeSession(sid);
const { getSignUp, postSignUp } = require('./routes/sign-up');
const { getSignin, postSignin } = require('./routes/sign-in');
const { postLogOut } = require('./routes/log-out');
const { addSecretform, handleAddSecret } = require('./routes/add-secret');

server.use(cookies); //pass cookieParser to all reoutes with req object
server.use(sessions); //calls next inside session()

server.get('/', getHomePage);
server.post('/', deleteSecret);

// add sign-up callback function
server.get('/sign-up', getSignUp); //html page
server.post('/sign-up', bodyParser, postSignUp);

// add sign-in callback function
server.get('/sign-in', getSignin);
server.post('/sign-in', bodyParser, postSignin);

// add log-out callback function
server.post('/log-out', postLogOut);

// add secret //if not signed-in this route shouldn't be allowed to see !!!
server.get('/add-secret', addSecretform);  //html page with form to add new secret
server.post('/add-secret', bodyParser, handleAddSecret); //callback handles the inputs

// delete
//server.post('/delete-secret', delete_callback); //delete_callback should listen to req and in model folder in file should delete post from db

function sessions(req, res, next) {
    const sid = req.signedCookies['group2-sid']; //undefined if there is not a sid
    const session = getSession(sid); //undefined if there is no session
    if (session) {
        const expiry = new Date(session.expires_at);
        const today = new Date();
        if (expiry < today) {
            removeSession(sid);
            res.clearCookie(sid);
        } else {
            req.session = session;
        }
    }
    next();
}

module.exports = server;
