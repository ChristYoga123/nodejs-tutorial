// Testing Async dengan Timing Function
function greet()
{
    console.log("Halo 3");
}


console.log("Halo 1"); // program 1
setTimeout(() => {
    console.log("Halo 2"); // program 2
}, 3000);
greet(); // program 3

// Output yang terbentuk adalah?
/*
Halo 1
Halo 3
Halo 2
*/
// Hal ini dikarenakan Javascript sifatnya non-blocking dan single-thread sehingga dia tidak perlu menunggu sebuah program selesai dijalankan baru menjalankan program selanjutnya. Dia bisa langsung mengeksekusi program lain yang dirasa memiliki waktu eksekusi tercepat