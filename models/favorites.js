const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  itemId: { type: String, required: true },
  image: { type:String, required: true },
  name:{type: String, required: true},
  salePrice:{type: String, required: true},
  productUrl:{type: String, required: true}
});

const Favorites = mongoose.model("Favorties", favoritesSchema);

module.exports = Favorites;