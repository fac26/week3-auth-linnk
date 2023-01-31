//html
//nav bar which holds home-link, (logout/add)||(login/signin)
//${title} for h1, home-link: '/', signed-in: true|false} and ${content}=>secrets,forms

function html({ title, homeLink, signedIn, content }) {
    return /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
    <header>
    <nav role="navigation" class="nav-bar">
    <a href="${homeLink}">Home</a>
      <ul class="nav-links">
      ${
          signedIn
              ? /*html*/ `<a href="/add-secret">Add Secret</a> <form method="POST" action="/log-out"><button class="Button">Log out</button></form>`
              : /*html*/ `<a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a>`
      }
      </ul>
    </nav>
  </header>
        <main>
          ${content}
        </main>
      </div>
    </body>
  </html>
`;
}

module.exports = { html };
