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
  let x: number = Number(read());
  let y: number = Number(read());
  let count: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % x === 0 || i % y === 0) {
      count ++;
    }
  }
  console.log(count);

  return;
};
main();
