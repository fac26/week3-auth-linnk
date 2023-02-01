function secretsTemplate(secretsFromDB) {
    const secretsUL = /*html*/ `
    <ul>${secretsFromDB.map((secret) => secretTemplate(secret)).join('')}</ul>
    `;
    return secretsUL;
}

function secretTemplate(secret) {
    const secretLI = /*html*/ `
    <li class="secret"><p>${secret.content}</p>
    <p>${secret.company_name}</p>
</li>
    `;
    return secretLI;
}

module.exports = { secretsTemplate };
