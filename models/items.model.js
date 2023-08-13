module.exports = (mongooseObj) => {
    const itemSchema = new mongooseObj.Schema({
        namaBarang: String,
        jumlahBarang: Number
    });
    const barang = new mongooseObj.model('item', itemSchema);
    return barang;
}