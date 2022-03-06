const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true, useUnifiedTopology: true,
}, (err, res) => {
  if (err) throw err;
  console.log('Base de datos online', res.connections[0].host);
});

module.exports = mongoose;
