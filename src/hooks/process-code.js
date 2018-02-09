// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    if(!data.code && !data.language) {
      throw new Error('It should have Code and langauge');
    }
    const user = context.params.user;
    
    const code = context.data.code
      .substring(0, 1000);

    const lang = context.data.language;

    context.data = {
      userId: user._id,
      code,
      language: lang
    };
    return context;
  };
};
