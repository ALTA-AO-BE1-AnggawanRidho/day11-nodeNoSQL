module.exports = (mongooseObj) => {
    const itemSchema = new mongooseObj.Schema({
        _id: String,
        namaBarang: String
    });
    const barang = new mongooseObj.model('item', itemSchema);
    return barang;
}