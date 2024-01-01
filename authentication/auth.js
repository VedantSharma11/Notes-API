const basicAuth = require('express-basic-auth');

const users = {
    [process.env.AUTH_USERNAME]: process.env.AUTH_PASSWORD,
  };
  

const notesAuthMiddleware = basicAuth({
  users,
  challenge: true,
  unauthorizedResponse: 'Unauthorized Access',
});

module.exports = notesAuthMiddleware;
