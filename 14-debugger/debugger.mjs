// Debugger fungsinya untuk mencari permasalahan pada kode program kita.
// Breakpoint adalah lokasi dimana kita ingin menghentikan sementara eksekusi kode programnya untuk mengawasi data-data di sekitarnya. Mirip dd (dump & die) di Laravel
// Untuk menjalankan mode debug, jalankan command node inspect {namaFile}
/* Perintah Debugger:
1. cont, c => Continue Exec,
2. next, n => Step next,
3. step, s => Step in,
4. out, o => Step out,
5. pause => Pause running code
*/
import { log } from "console";
function sayHello(name) {
	debugger; // menjadi breakpoint dan program berhenti
	return `Halo ${name}`;
}
const name = "Yoga";
debugger;
log.sayHello(name);
