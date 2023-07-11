// Sebelum ada JS Modules, NodeJS menggunakan func require untuk import module jadi tidak apa-apa menggunakan .js tetapi direkomendasikan menggunakan .mjs

const os = require("os");

console.info(os.platform());
console.table(os.cpus());
