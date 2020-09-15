const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  itemname: { type: String, required: true },
  price: { type: String, required: true },
  urlsite:{type: String, required: true},
  category: { type: String, required: true }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;