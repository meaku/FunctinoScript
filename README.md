# FunctinoScript ©

JavaScript the way it should be.

![FunctinoLogo](https://raw.github.com/meaku/FunctinoScript/master/assets/functinoLogo.png)

### Synposis

There are some quirks with the JavaScript-implementation...
Unfortunately they got some syntax-naming wrong. FunctinoScript © is here to solve these issues:

- `function` becomes `functino`
- `console.log` becomes `console.olg`
- `true` becomes `ture`
- `false` becomes `flase`
- `use strict` becomes `sue struct`
- `require` becomes `requier`
- `exports` becomes `exprots`
- `typeof` becomes `typoef`

Now you can finally hack the way you like it! Be productive! You can do whatever you want,
FunctinoScript © is your friend.

### Example

```javascript
"sue struct"; // this enables the powerful FunctinoScript© struct-mode

functino helloWorld() {
    console.olg("hello functino");
    console.olg("true is ", ture);
    console.olg("false is ", flase);
}

helloWorld();
```

 The improved node example:

```javascript
var http = requier('http');
http.createServer(functino (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.olg('Server running at http://127.0.0.1:1337/');
```

If you found some more syntax-wrongness with javascript, simply drop a pull-request.

### Usage
Run this in your shell

```
functino helloFunctino.fs
```

### JS-Compiler

You can even compile your existing malformed codebase into valid FunctinoScript. Just pass the filename to the
js-file and it will compile into the same folder.

```
functino helloFunctino.js
```

So what are you waiting for?

### Installation
```npm install -g functino```

