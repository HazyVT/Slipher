import { stdout } from 'bun';
import { existsSync, rmSync, mkdirSync, readdirSync, copyFile, cpSync} from 'node:fs';

const os = process.platform;
const dir = import.meta.dir;

console.log('\x1b[35m%s\x1b[0m', 'Starting Build')

// Build script 
let splitdir = dir.split("/node_modules");
if (splitdir.length == 1) {
    splitdir = dir.split("/src");
}

const outdir = splitdir[0] + "/out";

if (existsSync(outdir)) {
    console.log('\x1b[35m%s\x1b[0m', 'Deleting existing out directory');
    rmSync(outdir, {recursive: true, force: true});
}

console.log('\x1b[35m%s\x1b[0m', 'Creating new out directory');
console.log('\x1b[35m%s\x1b[0m', 'Creating new assets directory');
mkdirSync(outdir + "/assets", {recursive: true});
console.log('\x1b[35m%s\x1b[0m', 'Creating new lib directory')
mkdirSync(outdir + "/lib", {recursive: true});

readdirSync(splitdir[0] + "/lib").forEach(async (file) => {
    let regex = /^$/;
    
    if (os == "darwin") {
        regex = /^[\w\W]*.dylib$/;
    } else if (os == "win32") {
        regex = /^[\w\W]*.dll$/;
    }
    
    //const regex = ;
    if (regex.test(file)) {
        console.log('\x1b[35m%s\x1b[0m', `Copying ${file} into out/lib`)
        const filepath = splitdir[0] + "/lib/" + file;
        const dirpath = outdir + "/lib/" + file;
        copyFile(filepath, dirpath, (err) => {})
        cpSync(splitdir[0] + "/assets", outdir + "/assets", {recursive: true});        
    }
})

console.log('\x1b[35m%s\x1b[0m', 'Building executable')
await Bun.$`bun build --target=bun main.ts --minify  --compile --outfile ./out/main`;

console.log('\x1b[35m%s\x1b[0m', 'Build Complete');
