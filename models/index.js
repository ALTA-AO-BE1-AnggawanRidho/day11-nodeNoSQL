const mongoose = require('mongoose');

try {
    var conn = mongoose.connect('mongodb://127.0.0.1:27017/data_toko').then((_) => {
        // console.log(`Connected to Database`);
    });
} catch (e) {
    console.error(e);
}

const db = {};
db.mongoose = conn;
db.users = require('./users.model')(mongoose);
db.barang = require('./items.model')(mongoose);

module.exports = db;