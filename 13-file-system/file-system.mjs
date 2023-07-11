// File System merupakan standard library untuk memanipulasi file system
/*
Ada 3 jenis library:
1. Library untuk blocking atau sync. {Tidak direkomendasikan}
2. Library untuk non-blocking atau async menggunakan callback. {Tidak direkomendasikan karena takut callback hell}
2. Library untuk non-blocking atau async menggunakan promise. {Direkomendasikan}
*/

// import fs from "fs"; // Sync and Async with Callback
import fs from "fs/promises"; // Promise
import { log } from "console";
// Sync Library
/*
const buffer = fs.readFileSync("file-system.mjs"); // Read File System
log(buffer.toString());
fs.writeFileSync("test.txt", "Halo Yoga"); // Write File System
*/

// Promise Library {Jangan lupa await}
const buffer = await fs.readFile("file-system.mjs");
log(buffer.toString());
await fs.writeFile("test.txt", "Halo Yoga");
