const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  else if (req.url === url.pathname + url.search) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const params = new URLSearchParams(url.search);
    for(var param of params.entries()) {
      res.write(
        `<table style='border:1px solid black;'>
          <tr'>
            <td style='border:1px solid black;'>`+param[0]+`</td>
            <td style='border:1px solid black;'>`+param[1]+`</td>
          </tr>
        </table>`
      );
    }
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write(`<h1>404: Page not found</h1>`);
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
