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
    let x: string = read();
    let num: number = Number(x);
    if(num <= Number.MAX_SAFE_INTEGER){
      console.log(Math.ceil(num/10))
    }else{
      let bigNumber = BigInt(x);
      let quotient = bigNumber/10n;
      let amari = bigNumber%10n;
      if(amari>0){
        quotient++;
      }
      console.log(quotient.toString());
    }
    return;
};
main();
