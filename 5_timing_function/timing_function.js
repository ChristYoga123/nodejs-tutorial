/*
Timing Function

Ada 2 function global untuk timing:
1. SetInterval(function, waktu_durasi) => menjalankan blok program secara terus-menerus dengan durasi waktu yang ditetapkan (Infinite Loop dengan jeda)
2. SetTimeOut(function, waktu_stop) => menjalankan blok program setelah waktu yang ditentukan. Sleep dulu baru program jalan
*/

// SetInterval
setInterval(function hello() {
    console.log("Halo");
}, 1000); // print Halo akan terus berjalan dengan jeda 1 detik/1000ms (Infinite Loop dengan Jeda)

// SetTimeOut
setTimeout(function hello(){
    console.log("Halo");
},1000); // print Halo baru dieksekusi setelah menunggu selama 1 detik

// NB:Silahkan dicomment satu satu dulu untuk testing