//cookies?
//we listen only post request
//remove cookies, remove from session, redirect to home page

const { removeSession } = require("../model/sessions");

function postLogOut(req, res) {
    const sessionID = req.signedCookies.sessionID;
    removeSession(sessionID);
    res.clearCookie("sessionID");
    res.redirect("/");
}

module.exports = { postLogOut }