import { existsSync, rmSync, mkdirSync, readdirSync, copyFile, cpSync} from 'node:fs';

const os = process.platform;
let dir = import.meta.dir;

console.log('\x1b[35m%s\x1b[0m', 'Starting Build')

// Build script 
let splitdir: string[] = [];
let outdir = "";
let outassetsdir = "";
let outlibdir = "";
let locallibdir = "";
let outfontdir = "";
let localfontdir = "";
if (os == "win32") {
    splitdir = dir.split("\\node_modules");
    console.log(splitdir);
    outdir = splitdir[0] + "\\out";
    outassetsdir = outdir + "\\assets";
    outlibdir = outdir + "\\lib";
    locallibdir = import.meta.dir + "\\lib";
    outfontdir = outdir + "\\font";
    localfontdir = splitdir[0] + "\\font";


} else {
    splitdir = dir.split("/node_modules");
    console.log(splitdir);
    outdir = splitdir[0] + "/out";
    outassetsdir = outdir + "/assets";
    outlibdir = outdir + "/lib";
    locallibdir = import.meta.dir + "/lib";
    outfontdir = outdir + "/font";
    localfontdir = splitdir[0] + "/font";
}


if (existsSync(outdir)) {
    console.log('\x1b[35m%s\x1b[0m', 'Deleting existing out directory');
    rmSync(outdir, {recursive: true, force: true});
}

console.log('\x1b[35m%s\x1b[0m', 'Creating new out directory');
console.log('\x1b[35m%s\x1b[0m', 'Creating new assets directory');

mkdirSync(outassetsdir, {recursive: true});
console.log('\x1b[35m%s\x1b[0m', 'Creating new lib directory')
mkdirSync(outlibdir, {recursive: true});

console.log('\x1b[35m%s\x1b[0m', 'Creating new font directory')
cpSync(localfontdir, outfontdir, {recursive: true});



readdirSync(locallibdir).forEach(async (file) => {
    let regex = /^$/;
    let locallibpath = "";
    let outlibpath = "";
    
    if (os == "darwin") {
        regex = /^[\w\W]*.dylib$/;
        locallibpath = locallibdir + "/";
        outlibpath = outlibdir + "/";
    } else if (os == "win32") {
        regex = /^[\w\W]*.dll$/;
        locallibpath = locallibdir + "\\";
        outlibpath = outlibdir + "\\";
    }
    
    //const regex = ;
    if (regex.test(file)) {
        console.log('\x1b[35m%s\x1b[0m', `Copying ${file} into out/lib`)
        copyFile(locallibpath + file, outlibpath + file, (err) => {if (err != null) {console.error(err)}});
        cpSync(splitdir[0] + "/assets", outdir + "/assets", {recursive: true});        
    }
})

console.log('\x1b[35m%s\x1b[0m', 'Building executable')