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
  let array: string[] = s.split("");
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let alphabetsArray = alphabets.split("");
  const totalPatterns = choose(array.length, 2);
  let duplicatedPatterns = 0;
  for (let i = 0; i < alphabetsArray.length; i++) {
    let alphabetCount = array.filter((v) => v === alphabetsArray[i]).length;
    if (alphabetCount < 2) {
      continue;
    }
    duplicatedPatterns += choose(alphabetCount, 2);
  }
  if (totalPatterns - duplicatedPatterns === 0) {
    console.log(1);
  } else if (duplicatedPatterns === 0) {
    console.log(totalPatterns);
  }else
  {
    console.log(totalPatterns - duplicatedPatterns+1);
  }
  return;
};
function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function choose(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}
main();
