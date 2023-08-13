module.exports = (mongooseObj) => {
    const userSchema = new mongooseObj.Schema({
        _id: String,
        namaLengkap: String,
        alamat: String,
        hp: String,
    });
    const user = new mongooseObj.model('users' , userSchema);
    return user;
}