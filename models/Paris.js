const mongoose = require("../db/connection");

const ParisSchema = mongoose.Schema({
  idea: String,
  favorited: Boolean,

});

const list = mongoose.model("list", ParisSchema);

module.exports = list;