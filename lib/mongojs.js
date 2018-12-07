var mongojs = require('mongojs')

module.exports = (app) => {

  app.beforeStart(async function() {
    if (app.config.mongojs) {
      const config = app.config.mongojs;
      app.mongojs = await mongojs(config.databaseUrl);
    }
  });

};