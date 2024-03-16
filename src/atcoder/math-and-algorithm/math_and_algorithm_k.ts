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
    for(let i=2; i<=n; i++){
      let isPrime: boolean = true;
      for(let j=1;j<=n;j++){
        if(j!=1 && j!=i && i%j==0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        array.push(i);
      }
    }
    console.log(array.join(" "));

    return;
};
main();
