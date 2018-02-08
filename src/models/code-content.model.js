// code-content-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const codeContent = new Schema({
    userId: { type: String, required: true },
    code: { type: String, required: true },
    language: { type: String, required: true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('codeContent', codeContent);
};
