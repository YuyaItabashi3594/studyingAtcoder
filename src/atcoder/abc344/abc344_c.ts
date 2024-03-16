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
  let Narray: number[] = [];
  for (let i = 1; i <= n; i++) {
    let a: number = Number(read());
    Narray.push(a);
  }
  let m: number = Number(read());
  let Marray: number[] = [];
  for (let i = 1; i <= m; i++) {
    let b: number = Number(read());
    Marray.push(b);
  }
  let l: number = Number(read());
  let Larray: number[] = [];
  for (let i = 1; i <= l; i++) {
    let c: number = Number(read());
    Larray.push(c);
  }
  let q: number = Number(read());
  let Qarray: number[] = [];
  for (let i = 1; i <= q; i++) {
    let d: number = Number(read());
    Qarray.push(d);
  }

  let sumArray: number[] = [];
  for (let n of Narray) {
    for (let m of Marray) {
      sumArray.push(n + m);
    }
  }
  let uniqueSumArray = [...new Set(sumArray)];
  
  for(let q of Qarray){
    let isSolved = false;
    for(let u of uniqueSumArray){
      let subtract = q - u;
      if(Larray.includes(subtract)){
        console.log("Yes");
        isSolved = true;
        break;
      }
    }
    if(!isSolved){
      console.log("No");
    }
  }

  return;
};
main();
