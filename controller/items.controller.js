const db = require('../models');
const users = db.users;
const barang = db.barang;

exports.insert = async(username, idBarang, namaBarang) => {
    try {
        let data = new barang({
            _id: idBarang,
            namaBarang: namaBarang
        });
        await users.findOneAndUpdate(
            { _id: username }, // Find the user by username
            { $set: { daftarBarang: idBarang } }, // Update the 'daftarBarang' field
            { new: true } // Return the updated document
        );
        await data.save();
    } catch (error) {
        console.error('Insert barang gagal:');
        return null;
    };
}

exports.delete = async(idBarang) => {
    try {
        await barang.findOneAndDelete({ _id: idBarang });
    } catch (err) {
        return console.error(`Error saat menghapus, user kemungkinan tidak ada di database`, err);
    }
}

// exports.show = async() => {
//     let 
// }

// exports.delete = async()