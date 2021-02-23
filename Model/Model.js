const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
  },
});

const usersModel = mongoose.model("usersModel", newSchema);

module.exports = usersModel;
