const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fname: { type: String, required: true },
});

const Usercatigories = mongoose.model('Usercatigories', UserSchema);

module.exports = Usercatigories;
