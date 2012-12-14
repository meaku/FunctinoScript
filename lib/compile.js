"use strict";

var mappings = require("./mappings.js"),
    fs = require("fs"),
    path = require("path");

function compile(filename) {
    var extname = path.extname(filename),
        src,
        key;

    src = stripBOM(fs.readFileSync(filename, "utf8"));

    switch (extname) {
        case ".js":
            for (key in mappings) {
                if (mappings.hasOwnProperty(key)) {
                    src = src.replace(new RegExp(key, "g"), mappings[key]);
                }
            }
            break;
        case ".fs":
            for (key in mappings) {
                if (mappings.hasOwnProperty(key)) {
                    src = src.replace(new RegExp(mappings[key], "g"), key);
                }
            }
            break;
        default:
            throw new Error("Unknown file-type: Only .js or .fs files are allowed");
    }

    return src;
}

// Taken from node
function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = compile;