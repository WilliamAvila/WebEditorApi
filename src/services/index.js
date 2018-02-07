const codeContent = require('./code-content/code-content.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(codeContent);
};
