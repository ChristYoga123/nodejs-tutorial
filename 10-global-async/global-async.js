// Saat belajar JS, untuk menggunakan Async await biasanya membuat terlebih dahulu function yang ditandai dengan async.
// Saat menggunakan module, secara default global code adalah Async oleh karena itu bisa menggunakan Async Await kecuali jika diimplementasikan ke sebuah function, kita harus menandainya dengan async.

function samplePromise() {
	return Promise.resolve("Yoga");
}

// const name = await samplePromise(); Error karena jika berformat .js, maka kita harus membuat function dengan async

async function run() {
	const name = await samplePromise();
	console.log(name);
}
run();
