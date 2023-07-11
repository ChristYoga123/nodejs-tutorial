// Path merupakan standard library yang bisa gunakan untuk bekerja dengan lokasi file/folder

import { log } from "console";
import path from "path";

const file = "/Users/Yoga/contoh.txt";

log(path.dirname(file)); // melihat nama directory
log(path.basename(file)); // melihat nama file
log(path.extname(file)); // melihat ekstensi file
