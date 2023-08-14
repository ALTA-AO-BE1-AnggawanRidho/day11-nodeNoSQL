module.exports = (mongooseObj) => {
    const userSchema = new mongooseObj.Schema({
        _id: String,
        password: String,
        namaLengkap: String,
        alamat: String,
        hp: String,
    },
    {
        strict: false
    });
    const user = new mongooseObj.model('users' , userSchema);
    return user;
}