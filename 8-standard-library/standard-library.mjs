// Seperti penjelasan teori sebelumnya, tidak semua Library API dapat diimplement ke NodeJs seperti WebAPI seperti AJAX yang memang membutuhkan Web Browser.
// NodeJS memiliki librarynya sendiri karena berjalan di terminal dan jika kita ingin membuat modul sendiri, maka nama modul yang kita buat harus berformat .mjs(module js).

// Example Standard Module
import os from "os"; // jika masih dalam format js, dia error. Harus berupa .mjs

console.info(os.platform());
console.table(os.cpus());
