//cookies?
//display form to sign up, display link to home page if a user don't want to proceed with sign-in
//if an error don't redirect

const { html } = require('../templates/html');
const { userCredentialsForm } = require('../templates/forms');

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
    let { email, passqord } = req.body;
    console.log(email);
    res.redirect('/');
}

module.exports = { getSignUp, postSignUp };

//add npm run seed function in package.json
//dependency bcryptjs
//
