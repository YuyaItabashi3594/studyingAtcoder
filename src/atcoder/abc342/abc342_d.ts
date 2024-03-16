import * as fs from "fs";

// util for input
// prettier-ignore
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
// prettier-ignore
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
// prettier-ignore
const read = () => String((wordit.next()).value);

// main
const main = function () {
  // TODO edit this code, this code is for https://atcoder.jp/contests/practice/tasks/practice_1

  // param
  let n: number = Number(read());
  let array: Array<number> = [];
  let sqrtCount: number = 0;
  for (let i = 0; i < n; i++) {
    array.push(Number(read()));
  }
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const product = array[j] * array[k];
      const sqrt = Math.sqrt(product);
      if(Number.isInteger(sqrt)){
        sqrtCount++;
      } 
    }
  }
  console.log(sqrtCount);
  return;
};
main();
