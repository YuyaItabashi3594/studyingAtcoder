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
    let a: number = Number(read());
    let b: number = Number(read());
    let c: number = Number(read());
    const sum: number = Number(read());
    let count: number = 0;

    for(let i = 0; i <= a; i++) {
      for(let j = 0; j <= b; j++) {
        for(let k = 0; k <= c; k++) {
          if (500 * i + 100 * j + 50 * k === sum) {
            count++;
          }
        }
      }
    }
    // answer
    console.log(count);

    return;
};
main();
