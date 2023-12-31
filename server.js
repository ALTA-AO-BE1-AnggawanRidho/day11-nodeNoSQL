const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const controller = require('./controller');

var isRunning = true;

(async () => {
    while (isRunning) {
        console.log(`-----Menu Utama-----`);
        console.log('1. Register User');
        console.log('2. Login User');
        console.log('3. Hapus User');
        console.log('0. Exit Program');
        
        let input = prompt('Pilihan menu : ');
        if(Number(input) === 1){
            console.clear();
            console.log(`-----Menu Register User-----`);
            let username = prompt(`Masukkan username \t: `);
            let password = prompt.hide(`Masukkan password \t: `);
            let name = prompt(`Masukkan Nama Lengkap \t: `);
            let address = prompt(`Masukkan alamat \t: `);
            let phone = prompt(`Masukkan No. telepon \t: `);
            if (username && password) {
                await controller.users.insert(username, password, name, address, phone);
            }
        }

        if(Number(input) === 2){
            console.clear();
            console.log(`Menu Login`);
            let username = prompt(`Masukkan Username : `);
            let password = prompt.hide(`Masukkan Password : `);
            console.clear();
            let isAuthenticated = await controller.users.auth(username, password).then(console.log(`Login sebagai ${username}`));
            while (isAuthenticated) {
                
                console.log(`Menu Manajemen barang`);
                console.log(`1. Tambah Barang`);
                console.log(`2. Lihat Barang`);
                console.log(`3. Hapus Barang`);
                console.log(`0. Keluar Manajemen`);
        
                let input = prompt('Pilihan menu : ');

                if(Number(input) === 1){
                    let idBarang = prompt('ID Barang : ');
                    let namaBarang = prompt('Nama Barang : ');
                    await controller.barang.insert(username, idBarang, namaBarang).then(console.clear());
                };
                if(Number(input) === 2){
                    console.clear();
                    await controller.barang.getAll();
                };
                if(Number(input) === 3){
                    console.clear()
                    await controller.barang.getAll();
                    let idBarang = prompt('ID Barang uang akan dihapus : ');
                    await controller.barang.delete(idBarang).then(console.clear());
                };
                if(Number(input) === 0){
                    console.clear()
                    isAuthenticated = !isAuthenticated;
                };
            }
        }

        if(Number(input) === 3){
            await controller.users.getAll();
            let username = prompt('Masukkan username untuk dihapus: ');
            await controller.users.delete(username).then(`User ${username} berhasil dihapus`);
        }
    
    
        if(Number(input) === 0){
            isRunning = !isRunning;
        }
    }
    mongoose.connection.close();
})();