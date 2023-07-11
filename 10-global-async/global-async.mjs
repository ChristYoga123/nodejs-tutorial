// Jika menggunakan mjs, maka secara default kode kita adalah async sehingga tidak error
function samplePromise() {
	return Promise.resolve("Yoga");
}

const name = await samplePromise();
console.log(name);
