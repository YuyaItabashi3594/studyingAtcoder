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
  let s: string = read();
  let q: number = Number(read());
  let array: Array<string> = s.split("");
  let object: { [key: string]: number[] } = {};
  for (let i = 0; i < array.length; i++) {
    let str = array[i];
    if (!object[str]) {
      object[str] = [];
    }
    object[str].push(i);
  }
  for (let j = 0; j < q; j++) {
    const beforeLetter = read();
    const afterLetter = read();
    if (object[beforeLetter]) {
      for (let index of object[beforeLetter]) {
        array[index] = afterLetter;
      }
      object[afterLetter] = (object[afterLetter] || []).concat(
        object[beforeLetter]
      );
      delete object[beforeLetter];
    }
  }
  console.log(array.join(""));
  return;
};
main();
