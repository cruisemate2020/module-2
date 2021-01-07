const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name: { type: String },
  age: { type: Number }
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;