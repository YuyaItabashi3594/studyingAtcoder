"use strict";
const lines = [];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    console.log(lines);
});
//# sourceMappingURL=index.js.map