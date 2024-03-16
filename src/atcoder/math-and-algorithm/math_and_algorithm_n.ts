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
  let array: number[] = [];
  let flag = false;
  let isFinished = false;
  while (isFinished == false) {
    flag = false;
    let root = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= root; i++) {
      if (n % i == 0) {
        let otherNumber = n / i;
        array.push(i);
        n = otherNumber;
        flag = true;
        break;
      }
    }
    if (flag == false) {
      if (n != 1) {
        array.push(n);
      }
      isFinished = true;
    }
  }
  console.log(array.join(" "));
  return;
};
main();
