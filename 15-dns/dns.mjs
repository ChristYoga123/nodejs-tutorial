// Dns merupakan standard library yang digunakan untuk bekerja dengan DNS (Domain Name Server)
import { log } from "console";
import dns from "dns/promises"; // Promise Library

const address = await dns.lookup("www.programmerzamannow.com"); // return JSON in Promise
log(address);
