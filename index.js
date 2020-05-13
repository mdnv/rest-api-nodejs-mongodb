const express = require('express')
const app = express()

const routes = [];

app.router.stack.forEach(middleware => {
  if (middleware.route) {
    routes.push(`${Object.keys(middleware.route.methods)} -> ${middleware.route.path}`);
  }
});

console.log(JSON.stringify(routes, null, 2));
