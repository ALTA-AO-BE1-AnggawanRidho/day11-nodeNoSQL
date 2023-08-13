const db = require('../models');
const users = db.users;

exports.insert = async(username, name, address, phone) => {
    let data = new users({
        _id: username,
        namaLengkap: name,
        alamat: address,
        hp: phone
    })
    await data.save().then((_) => {
        return console.log('Insert user berhasil');
    }).catch(e => {
        console.error('Insert gagal!');
    });
}