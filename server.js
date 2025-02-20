import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
    </head>
    <style>
      main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;       
      }
      p {
       color: green;
       font-size: 20px;
      }
    </style>
    <body>
      <main class="wrapper">
        <h1>Привет МИР!</h1>
        <p>Адрес запрашиваемого сайта: ${req.headers.host}</p>
      </main>
    </body>
    </html>
  `;
  res.end(html);
});
// Запуск сервера локально на порту 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Слушаю 127.0.0.1 на порту 3000! Привет МИР!');
});
// запустить сервер командой: node server.js