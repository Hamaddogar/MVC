const mongoose = require('mongoose');
const db_url = process.env.DB_URL || "mongodb+srv://hamad:hamad@cluster0.6zetdcs.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB CONNECTION ERROR'));
db.once('open', () => {
  console.log('Successfully connected to the database');
});

module.exports = db;
