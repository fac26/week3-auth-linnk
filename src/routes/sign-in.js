//cookies?
//display form to sign in, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../model/users.js');
const { userCredentialsForm } = require('../templates/forms.js');
const { createSession } = require('../model/sessions.js');
const { html, navBar } = require('../templates/html');

function getSignin(request, response) {
    const title = 'Sign in';
    const nav = navBar(request.session);
    const content = userCredentialsForm('/sign-in');
    const signInPage = html(title, nav, content);
    response.send(signInPage);
}

function postSignin(request, response) {
    const { email, password } = request.body;
    const user = getUserByEmail(email); //{id.hash..}
    const errors = {};

    if (!email) {
        errors.email = 'please add your email';
    }
    if (!password) {
        errors.password = 'please enter password';
    }
    if (!user) {
        errors.user = "Haven't you got an account yet? Please sign-up!";
    }

    if (Object.keys(errors).length > 0) {
        const title = 'Sign in';
        const h1 = /*html*/ `<h1>${title}</h1>`;
        const nav = navBar(request.session);
        const content = userCredentialsForm('/sign-in', errors);
        const body = html(title, nav, h1.concat(content)); //sort this line out

        return response.send(body);
    }
    bcrypt.compare(password, user.hash).then((match) => {
        if (!match) {
            const title = 'Sign in';
            const h1 = /*html*/ `<h1>${title}</h1>`;
            const nav = navBar(request.session);
            const content = userCredentialsForm('/sign-in', errors);
            const failed = `${h1}<h2>Login Failed</h2>`;
            const body = html(title, nav, failed.concat(content)); //sort this line out
            return response.status(400).send(body);
        } else {
            const session_id = createSession(user.id);
            response.cookie('sid', session_id, {
                signed: true,
                maxAge: 1000 * 60 * 60 * 24 * 3,
                sameSite: 'lax',
                httpOnly: true,
            });
            console.log(session_id);
            response.redirect(`/`);
        }
    });
}

module.exports = { getSignin, postSignin };
