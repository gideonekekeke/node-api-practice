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

  photo: {
    type: String,
  },
});

module.exports = mongoose.model("usersModel", newSchema);
