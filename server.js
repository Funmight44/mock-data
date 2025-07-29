const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("data/db.json"); // Update path if needed
const middlewares = jsonServer.defaults();

// CORS must come BEFORE middlewares and router
server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
