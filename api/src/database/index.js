const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(process.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
