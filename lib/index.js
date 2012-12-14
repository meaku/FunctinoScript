#!/usr/bin/env node

var fs = require("fs"),
    vm = require("vm"),
    path = require("path");

var args = process.argv,
    filePath = args[2];

if (filePath === undefined) {
    throw new Error("You have to pass a filename!");
}

//our improved console
var functinoConsole = {
    olg : function() {
        console.log.apply(null, arguments);
    }
};

//all references we need for functinos
var functinoSandbox = {};
for (var key in global) {
    functinoSandbox[key] = global[key];
}
functinoSandbox.console = functinoConsole;
functinoSandbox.__filename = filePath;
functinoSandbox.__dirname = path.dirname(filePath);

//read source
var functinoScriptSource = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8");

//do the heavy compile shizzle
functinoScriptSource = functinoScriptSource
    .replace("\"use struct\";", "\"use strict\";")
    .replace("\"sue struct\";", "\"use strict\";")
    .replace("functino", "function")
    .replace("ture", "true")
    .replace("requier", "require")
    .replace("flase", "false");

//run it!
vm.runInNewContext(functinoScriptSource, functinoSandbox, filePath);
