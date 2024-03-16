"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// util for input
// prettier-ignore
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n"))
    yield line.trim(); })();
// prettier-ignore
const wordit = (function* () { while (true) {
    let line = lineit.next();
    if (line.done)
        break;
    for (const word of String(line.value).split(" "))
        yield word;
} })();
// prettier-ignore
const read = () => String((wordit.next()).value);
// main
const main = function () {
    // TODO edit this code, this code is for https://atcoder.jp/contests/practice/tasks/practice_1
    // param
    let n = Number(read());
    let s = read();
    let q = Number(read());
    let array = s.split("");
    let object = {};
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
            object[afterLetter] = (object[afterLetter] || []).concat(object[beforeLetter]);
            delete object[beforeLetter];
        }
    }
    console.log(array.join(""));
    return;
};
main();
//# sourceMappingURL=abc342_c.js.map