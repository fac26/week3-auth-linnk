function userCredentialsForm(path /* ,errors = {} */) {
    const credentialshtml = /*html*/ `
      <div class="credentials-form">
        <form method="POST" class="Row" action="${path}">
          <div class="form-div">
            <label for="email">email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-div">
            <label for="password">password</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button class="Button" type="submit">Submit</button>
        </form>
      </div>
    `;
    return credentialshtml;
}

function addSecretsForm(/*errors = {}*/) {
  const formhtml = /*html*/ `
    <form method="POST" action="/add-secret">
    <p><label for="companies">Company</label> <br>
    <input class="companies" name="companies"></p>
    <p><label for="secret">Your secret:</label>
    <input name="secret" id="secret">
    <button class="Button" type="Submit">Add &plus;</button>
    </form>
    `;
  return formhtml;
}

module.exports = { userCredentialsForm, addSecretsForm };
