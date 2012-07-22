#!/usr/bin/env node

var fs = require("fs"),
    vm = require("vm"),
    path = require("path");

var args = process.argv,
    filePath = args[2];

if(filePath === undefined) {
    throw new Error("You have to pass a filename!");
}

//our improved console
var functinoConsole = {
    olg : function() {
        console.log.apply(null, arguments);
    }
};

//all references we need for functinos
var functinoSandbox = {
    require: require,
    console: functinoConsole,
    //__filename: __filename,
    process : process
};

//give it some context
var context = vm.createContext(functinoSandbox);
var functinoScriptSource = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8");

//"compile"
functinoScriptSource = functinoScriptSource.replace("functino", "function");
functinoScriptSource = functinoScriptSource.replace("ture", "true");
functinoScriptSource = functinoScriptSource.replace("flase", "false");

//run it!
var compiledFunctinoCode = vm.createScript(functinoScriptSource);
compiledFunctinoCode.runInNewContext(context);