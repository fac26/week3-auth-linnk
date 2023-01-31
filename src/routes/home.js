// if a user signed-in display his secrets with delete-btn, here we should also call function from model/sessions.js which returns user-id
//we expect to get a list of user secrets ids from model/secrets
//map through select-all-secrets and if id === user secrets ids we should add detele-btn

//post req

const { html, navBar } = require('../templates/html');

function getHomePage(req, res) {
    const title = 'Corporategirl secrets';
    const nav = navBar(req.session); //we pass on session data
    const content = `<div>'all secrets'<div>`;
    const homePage = html(title, nav, content);
    res.send(homePage);
}
function deleteSecret(req, res) {
    const session = req.session;

    //listen if the delete button clicked
}

module.exports = { getHomePage, deleteSecret };
