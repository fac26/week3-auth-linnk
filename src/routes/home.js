//get req
//check if user has already signed-in links => log-out / add-new-secret
//check if user not signed-in links => sign-up/sign-in

//display all secrets

// if a user signed-in display his secrets with delete-btn, here we should also call function from model/sessions.js which returns user-id
//we expect to get a list of user secrets ids from model/secrets
//map through select-all-secrets and if id === user secrets ids we should add detele-btn

//post req

const html = require('../templates/html');

//implement and check here for cookie here, and if yes!
// if yes const signed = true, pass it to html template

//html('Secrets',signed , secrets)

function getHomePage(req, res) {
    const title = 'Corporategirl secrets';
    const nav = navBar(req.session);
    const content = 'all secrets';
    const homePage = html(title, nav, content);
    res.send(homePage);
}
function deleteSecret(req, res) {
    //listen if the delete button clicked
}

function navBar(session) {
    return /*html*/ `<ul>
    <li><a href='/'>Home</a><div>
    <div>
        ${
            session
                ? /*html*/ `<li><a href="/add-secret">Add new secret</a></li><li><form method="POST" action="/log-out"><button class="Button">Log out</button></form></li>`
                : /*html*/ `<li><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></li>`
        }
    </div>
    </ul>`;
}
module.exports = { getHomePage, deleteSecret };
