// Event adalah libraru untuk implementasi EventListener yang mana terdapat class EventEmitter untuk menampung data listener per jenis event dan kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut.
import { log } from "console";
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", function (name) {
	log(`halo ${name}`);
});

emitter.addListener("hello", function (name) {
	log(`hello ${name}`);
});

emitter.emit("hello", "Yoga"); // Karena ada 2 event dengan nama sama tetapi memiliki callback func yang berbeda, ketika ditrigger 1 kali oleh emit, maka event tadi akan dieksekusi dua duanya
