const mainMenu = require('./main-menu');
const prompt = require('prompt-sync')();
const controller = require('../controller');

const registerMenu = async () => {
    console.clear();
    console.log(`Menu Register User`);
    let username = prompt(`Masukkan username \t: `);
    let name = prompt(`Masukkan Nama Lengkap \t: `);
    let address = prompt(`Masukkan alamat \t: `);
    let phone = prompt(`Masukkan No. telepon \t: `);
    await controller.users.insert(username, name, address, phone);
    mainMenu();
}

module.exports = registerMenu;