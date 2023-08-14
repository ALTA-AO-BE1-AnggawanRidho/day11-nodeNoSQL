const db = require('../models');
const users = db.users;

exports.insert = async(username, password, name, address, phone) => {
    let data = new users({
        _id: username,
        password: password,
        namaLengkap: name,
        alamat: address,
        hp: phone
    })
    await data.save().then((_) => {
        console.log('Insert user berhasil');
        console.clear();
    }).catch(e => {
        console.error('Insert gagal!')
    });
}

exports.auth = async(username, password) => {
    try {
        const result = await users.findOne({ _id: username, password: password });
        return result || false; // Return the result if it exists, otherwise return an empty object
    } catch (error) {
        
        return console.error('An error occurred during authentication:', error); // Return an empty object in case of an error
    }
}

exports.delete = async(username) => {
    try {
        await users.findOneAndDelete({_id: username});
    } catch (err) {
        return console.error(`Error saat menghapus, user kemungkinan tidak ada di database`, err);
    }
}