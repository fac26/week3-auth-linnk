//html
//nav bar which holds home-link, (logout/add)||(login/signin)
//${title} for h1, home-link: '/', signed-in: true|false} and ${content}=>secrets,forms

function html({ title, nav, content }) {
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
      ${nav}
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
