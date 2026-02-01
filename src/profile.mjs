import htmlnano from './minifiers/htmlnano.mjs';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const html = fs.readFileSync(path.join(__dirname, "../assets/reimu.html"), "utf8");
async function run() {
    for (let i = 0; i < 100; i++) {
        await htmlnano(html);
    }
}

run();