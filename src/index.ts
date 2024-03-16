const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers: number[] = []; // Initialize an empty array to store the numbers

reader.on("line", function (line: string) {
  lines.push(line);
});
reader.on("close", function () {
  const inputArray:Array<string> = lines.join(' ').split(/\s/);
  const appleAmount:number = 5;
  const orangeAmount:number = parseInt(inputArray[0]);
  console.log(appleAmount + orangeAmount)
});
