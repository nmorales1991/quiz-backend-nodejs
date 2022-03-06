const mongoose = require('mongoose');
const { databaseUrl } = require('./config');

mongoose.connect(databaseUrl, {
  useNewUrlParser: true, useUnifiedTopology: true,
}, (err, res) => {
  if (err) throw err;
  console.log('Base de datos online', res.connections[0].host);
});

module.exports = mongoose;
