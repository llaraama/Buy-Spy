const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  itemname: { type: String, required: true },
  price: { type: String, required: true },
  urlsite:{type: String, required: true},
  category: { type: String, required: true }
});

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;
