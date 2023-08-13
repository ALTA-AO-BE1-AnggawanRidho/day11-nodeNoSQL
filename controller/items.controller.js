const db = require('../models');
const barang = db.barang;

exports.insert = async(nama) => {
    let data = new barang({
        namaBarang: nama
    });

    await data.save().then((_) => {
        console.log(`Insert barang berhasil`);
    }).catch((err) => {
        console.log(``);
    });
}

// exports.show = async() => {
//     let 
// }

// exports.delete = async()