const mainMenu = require('./main-menu');
const prompt = require('prompt-sync')();
const controller = require('../controller');

const inventoryPage = async () => {
    let isRunning = true;
    while (isRunning) {
        console.clear();
        console.log(`Menu Manajemen barang`);
        console.log(`1. Tambah Barang`);
        console.log(`2. Lihat Barang`);
        console.log(`3. Hapus Barang`);
        console.log(`0. Keluar Manajemen`);

        let input = prompt('Pilihan menu : ');
    
        if(Number(input) === 0){
            return mainMenu();
        }
    }
}

module.exports = inventoryPage;