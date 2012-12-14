#!/usr/bin/env node

var fs = require("fs"),
    path = require("path"),
    compile = require("./compile.js");

var args = process.argv,
    filename = args[2],
    outputFilename,
    dirname,
    basename,
    extname,
    src;

if (filename === undefined) {
    throw new Error("You have to pass a filename!");
}

//make it absolute
filename = path.resolve(process.cwd(), filename);
dirname = path.dirname(filename);
extname = path.extname(filename);
basename = path.basename(filename, extname);

switch (extname) {
    case ".js":
        //write in the same folder
        src = compile(filename);
        outputFilename = path.join(dirname, basename + ".fs");
        fs.writeFileSync(outputFilename, src, "utf8");
        console.log("Compiled " + basename + extname + " into " + outputFilename);
        break;
    case ".fs":
        require.extensions[".fs"] = function(module, filename) {
            src = compile(filename);
            module._compile(src, filename);
        };
        //run it!
        require(filename);
        break;
    default:
}