function userCredentialsForm(path, errors = {}) {
    const credentialshtml = /*html*/ `
      <div class="credentials-form">
      ${renderErrorMessage(errors.user)}
        <form method="POST" class="Row" action="${path}">
          <div class="form-div">
            <label for="email">email</label>
            <input type="email" id="email" name="email" required>
            ${renderErrorMessage(errors.email)}
          </div>
          <div class="form-div">
            <label for="password">password</label>
            <input type="password" id="password" name="password" required >
            ${renderErrorMessage(errors.password)}
          </div>
          <button class="Button" type="submit">Submit</button>
        </form>
      </div>
    `;
    return credentialshtml;
}

function addSecretsForm(errors = {}) {
    const formhtml = /*html*/ `
    <form method="POST" action="/add-secret">
    <p><label for="companies">Title</label> <br>   
    <input name="title" id="title" required>
    ${renderErrorMessage(errors.title)}</p>
    <p><label for="companies">Company</label> <br>
    <input class="companies" name="companies" required>
    ${renderErrorMessage(errors.companies)}
    </p>
    <p><label for="secret">Your secret:</label>
    <input name="secret" id="secret" required>    
    ${renderErrorMessage(errors.secret)}
    <button class="Button" type="Submit">Add &plus;</button>
    </form>
    `;
    return formhtml;
}

function sanitize(input) {
    return input.replace(/</g, '&lt;');
}

function renderErrorMessage(message) {
    if (message) {
        return `<span style="color: red">${message}</span>`;
    } else {
        return '';
    }
}
module.exports = { userCredentialsForm, addSecretsForm, sanitize };
