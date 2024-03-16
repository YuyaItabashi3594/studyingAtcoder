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
    let a: string = read();
    const array:Array<string> = a.split('')
    const firstLetter = array[0];
    for(let i = 1; i < array.length; i++){
      if((array[i]) != firstLetter){
        if(i === 1){
          if(array[0] === array[2]){
            console.log(2)
            break
          }else{
            console.log(1)
            break
          }
        }else{
          console.log(i+1)
          break
        }
      }
    }
    return;
};
main();
