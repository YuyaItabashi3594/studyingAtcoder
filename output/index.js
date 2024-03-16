"use strict";
const lines = [];
const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
let numbers = []; // Initialize an empty array to store the numbers
reader.on("line", function (line) {
    lines.push(line);
});
reader.on("close", function () {
    const inputArray = lines.join(' ').split(/\s/);
    const appleAmount = 5;
    const orangeAmount = parseInt(inputArray[0]);
    console.log(appleAmount + orangeAmount);
});
//# sourceMappingURL=index.js.map