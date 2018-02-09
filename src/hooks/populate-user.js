// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { app, method, result, params } = context;

    const codeContentList = method === 'find' ? result.data : [ result ];

    await Promise.all(codeContentList.map(async codeContent => {

      const user = await app.service('users').get(codeContent.userId, params);

      codeContent.user = user;
    }));
    return context;
  };
};
