const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/diary-diabe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
