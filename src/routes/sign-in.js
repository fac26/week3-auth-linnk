//cookies?
//display form to sign in, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect
const bcrypt = require('bcryptjs');
const {getUserByEmail} = require('../model/user.js');
const {userCredentialsForm} = require('../templates/form.js');
const { createSession } = require('../model/sessions.js');

function getSignin (request,response){
    const body = {userCredentialsForm};
    response.send(body)
}

function postSignin (request,response){
    const {email, password} = request.body;
    const user = getUserByEmail(email);
    if (!user || !email || !password) {
        return response.status(400).send("<h1>Login Failed</h1>");
    }
    bcrypt.compare(password, user.hash).then((match)=> {
        if (!match){
            return response.status(400).send("<h1>Login Failed</h1>");
        } else {
            const session_id = createSession(user.id);
        response.cookie("sid", session_id, {
            signed:true,
            maxAge:-10,
            sameSite: "lax",
            httpOnly: true,
        });
        response.redirect(`/`)
    }
});
}
        

module.exports = {getSignin, postSignin}