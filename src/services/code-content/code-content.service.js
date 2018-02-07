// Initializes the `code-content` service on path `/code-content`
const createService = require('feathers-mongoose');
const createModel = require('../../models/code-content.model');
const hooks = require('./code-content.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'code-content',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/code-content', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('code-content');

  service.hooks(hooks);
};
