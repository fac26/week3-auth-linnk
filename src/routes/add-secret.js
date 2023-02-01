//imports function from model/secrets.js
const { html, navBar } = require("../templates/html") //all pages will have the navbar
const { createSecret, listSecrets } = require("../model/secrets");
const { getSession } = require("../model/sessions");
const { addSecretsForm } = require('../templates/forms');
const { secretsTemplate } = require('../templates/secrets-templates');

//for get req-diplay form for user to add new secret
function addSecretform(req, res) {
   
    const title = "Add your secret!";
    const content = addSecretsForm() //addSecretsForm.formhtml
    const nav  = navBar(req.session);
    const body = html(title, nav, content)//sort this line out
    res.send(body);
}

//for post req
//we should check inputs for validation and sanitization

function handleAddSecret(req, res) { //executes as soon as user clicks on add button
    //first check if the user is logged in to add a secret
    //const sessionID = req.signedCookies.sid;

    //reading for company and your secret input
    let { companies, secret } = req.body;
    console.log(companies, secret)
    const DBsession = getSession(req.session.id);
    console.log(DBsession, "this is DBsession")
    console.log(req.session.id, "this is ID")
    console.log(req.session, "this is session from request")
    const current_user = req.session;
    //if they are not logged in, send error
    // if (!current_user) {
    //     return res.status(401).send("<h1>You are not logged in to make any changes</h1>");
    // }
    const secrets = listSecrets(current_user);

    const title = "All Secrets";
    const content = secretsTemplate(secrets);
    const nav = navBar(req.sessions);
    const body = html(title, nav, content);

    if (!req.body.content || !current_user) {
        return res.status(401).send("<h1>Secret addition failed</h1>");
    }
    createSecret(req.body.content, current_user);
    res.redirect(`/add-secret/${current_user}`);
    res.send(body);
}

module.exports = { addSecretform, handleAddSecret };

//const secrets = listSecrets(req.params.user_id);