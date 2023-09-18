const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
  });

  const Ticker = mongoose.model('Ticker', Schema);
module.exports = Ticker;