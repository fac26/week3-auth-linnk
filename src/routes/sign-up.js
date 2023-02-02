//cookies?
//display form to sign up, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect
const bcrypt = require('bcryptjs');

const { html } = require('../templates/html');
const { userCredentialsForm, sanitize } = require('../templates/forms');
const { createUser } = require('../model/users');
const { createSession } = require('../model/sessions');

function getSignUp(req, res) {
    const title = 'Create an account';
    const h1 = /*html*/ `<h1>${title}</h1>`;
    const nav = /*html*/ `<ul>
    <li><a href='/'>Home</a><ul>`;
    const content = userCredentialsForm('/sign-up');
    const signUpPage = html(title, nav, h1.concat(content));
    res.send(signUpPage);
}

function postSignUp(req, res) {
    let { email, password } = req.body;
    //
    const errors = {};
    if (!email.trim()) {
        errors.email = 'please add your email';
    }
    if (!password.trim()) {
        errors.password = 'please enter password';
    }

    if (Object.keys(errors).length > 0) {
        const title = 'Create an account';
        const h1 = /*html*/ `<h1>${title}</h1>`;
        const nav = /*html*/ `<ul>
    <li><a href='/'>Home</a><ul>`;
        const content = userCredentialsForm('/sign-up', errors);
        const body = html(title, nav, h1.concat(content)); //sort this line out

        return res.send(body);
    }

    bcrypt
        .hash(password, 12)
        .then((hash) => {
            email = sanitize(email);
            const user = createUser(email, hash);
            const session_id = createSession(user.id); //returns session id
            res.cookie('sid', session_id, {
                signed: true,
                maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
                sameSite: 'lax',
                httpOnly: true,
            });

            res.status(200).redirect('/');
        })
        .catch((err) =>
            console.log(
                'Error from hashing the password, something went wrong with brypt.hash',
                err
            )
        );
}

module.exports = { getSignUp, postSignUp };

//add npm run seed function in package.json
//dependency bcryptjs
