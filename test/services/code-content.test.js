const assert = require('assert');
const app = require('../../src/app');

describe('\'code-content\' service', () => {
  it('registered the service', () => {
    const service = app.service('code-content');

    assert.ok(service, 'Registered the service');
  });
});
