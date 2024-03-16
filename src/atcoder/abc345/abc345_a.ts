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
  let s: string = read();
  if (s.includes("&gt;")) {
    s = s.replace(/&gt;/g, ">");
  }
  if (s.includes("&lt;")) {
    s = s.replace(/&lt;/g, "<");
  }
  let array: string[] = s.split("");
  let flag = true;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (array[i] != "<") {
        console.log("No");
        flag = false;
        break;
      }
    }
    else if (i === array.length - 1) {
      if (array[i] != ">") {
        console.log("No");
        flag = false;
        break;
      }
    }
    else {
      if (array[i] != "=") {
        console.log("No");
        flag = false;
        break;
      }
    }
  }
  if(flag){
    console.log("Yes");
  }

  return;
};
main();
