const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './db.json'));
const middlewares = jsonServer.defaults();

const routes = require('./routes.json');

const PORT = 5001;

server.use(cors());
server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
