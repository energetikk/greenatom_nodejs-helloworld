// server.js
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// Запустите сервер локально на порту 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Слушаю 127.0.0.1 на порту 3000! Привет МИР!');
});
// run with `node server.js`