const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const controller = require('./controller');

var isRunning = true;

(async () => {
    while (isRunning) {
        console.clear();
        console.log(`-----Menu Utama-----`);
        console.log('1. Register User');
        console.log('2. Login User');
        console.log('3. Hapus User');
        console.log('0. Exit Program');
        
        let input = prompt('Pilihan menu : ')
        if(Number(input) === 1){
            console.clear()
            
            console.log(`-----Menu Register User-----`);
            let username = prompt(`Masukkan username \t: `);
            let name = prompt(`Masukkan Nama Lengkap \t: `);
            let address = prompt(`Masukkan alamat \t: `);
            let phone = prompt(`Masukkan No. telepon \t: `);
            if (username) {
                await controller.users.insert(username, name, address, phone);
            }
        }

        if(Number(input) === 2){
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
                    isRunning = !isRunning;
                }
            }
            // let res = await ctl.getAll();
            // res.forEach(element => {
            //     console.log(element.dataValues);
                
            // });
        }

        // if(Number(input) === 3){
        //     let deleteID = prompt('Masukkan ID user untuk dihapus: ');
        //     await ctl.delete(Number(deleteID));
        // }
    
    
        if(Number(input) === 0){
            isRunning = !isRunning;
        }
    }

    // await controller.users.insert('gagakucing', 'Hari Tanoe', 'Jakarta', '87366276');
    // await controller.barang.insert('laptopgaming');
    mongoose.connection.close();
})();