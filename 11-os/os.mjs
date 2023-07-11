// OS merupakan library untuk menampilkan informasi dari device kita.
import os from "os";

console.log(os.platform()); // melihat platform
console.log(os.arch()); // melihat arsitektur OS
console.log(os.freemem()); // melihat memori kosong
console.log(os.totalmem()); // melihat memori total
console.log(os.homedir()); // melihat directory home
console.log(os.hostname()); // melihat hostname / owner
console.table(os.cpus()); // melihat detail cpu
