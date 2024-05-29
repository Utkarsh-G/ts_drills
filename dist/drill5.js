"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("readline/promises"));
const process_1 = require("process");
function fetchPokemonConcurrently(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemonSelected = [];
        const rl = promises_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
        var startTime = new Date().getTime();
        //Promise based solution
        const promises = [];
        for (let i = 0; i < id; i++) {
            promises[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${id + i}`).then(resp => resp.json());
        }
        Promise.all(promises)
            .then(data => {
            data.forEach((value, index) => console.log(index + "  " + value.name));
            var endTime = new Date().getTime();
            console.log(`Time total for parallel promises: ${endTime - startTime}`);
        });
        var endTime = new Date().getTime();
        console.log(`Time after setting up promises.all: ${endTime - startTime}`);
        rl.close();
        //console.log(`Selected pokemon: ${pokemonSelected}`)
    });
}
//fetchPokemonConcurrently(100);
function fetchPokemonSequentially(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const pokemonSelected = [];
        const rl = promises_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
        var startTime = new Date().getTime();
        //Promise based solution
        const promises = [];
        for (let i = 0; i < id; i++) {
            promises[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${id + i}`).then(resp => resp.json());
        }
        try {
            for (var _d = true, promises_2 = __asyncValues(promises), promises_2_1; promises_2_1 = yield promises_2.next(), _a = promises_2_1.done, !_a; _d = true) {
                _c = promises_2_1.value;
                _d = false;
                const p = _c;
                const result = yield p;
                console.log(result.name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promises_2.return)) yield _b.call(promises_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var endTime = new Date().getTime();
        console.log(`Time total for sequential promises: ${endTime - startTime}`);
        rl.close();
        //console.log(`Selected pokemon: ${pokemonSelected}`)
    });
}
// fetchPokemonSequentially(100);
function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}
function waitConcurrently(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        //Promise based solution
        const promises = [];
        for (let i = 0; i < id; i++) {
            promises[i] = delay(2000);
        }
        Promise.all(promises)
            .then(_ => {
            //data.forEach((value, index) => console.log(index+"  "+value.name));
            var endTime = new Date().getTime();
            console.log(`Time total for parallel promises: ${endTime - startTime}`);
        });
        var endTime = new Date().getTime();
        console.log(`Time after setting up promises.all: ${endTime - startTime}`);
    });
}
//waitConcurrently(10);
function waitSequentially(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        //Promise based solution
        const promises = [];
        for (let i = 0; i < id; i++) {
            promises[i] = delay(1000 + i * 150);
        }
        for (const p of promises) {
            var endTime = new Date().getTime();
            console.log(`Time before an await: ${endTime - startTime}`);
            yield p;
            //console.log(result.name);
            var endTime = new Date().getTime();
            console.log(`Time after an await: ${endTime - startTime}`);
        }
        // let result = promises.reduce( (accumulatorPromise) => {
        //     return accumulatorPromise.then(() => {
        //         console.log("here");
        //       return delay(150);
        //     });
        //   }, Promise.resolve());
        var endTime = new Date().getTime();
        console.log(`Time after setting up sequential call: ${endTime - startTime}`);
    });
}
//waitSequentially(5); // 10 seconds
function waitGenerator(id) {
    return __asyncGenerator(this, arguments, function* waitGenerator_1() {
        var startTime = new Date().getTime();
        //Promise based solution
        const promises = [];
        for (let i = 0; i < id; i++) {
            promises[i] = delay(1000 + i * 150);
        }
        for (const p of promises) {
            var endTime = new Date().getTime();
            //console.log(`Time before an yield: ${endTime - startTime}`)
            yield yield __await(yield __await(p.then()));
            //console.log(result.name);
            var endTime = new Date().getTime();
            //console.log(`Time after resuming yield: ${endTime - startTime}`)
        }
        var endTime = new Date().getTime();
        //console.log(`Time after setting up sequential call: ${endTime - startTime}`)
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_2, _b, _c;
        // const myGen = waitGenerator(5);
        // let result = myGen.next();
        // while (!result.done) {
        //     await result.value;
        //     result = myGen.next();
        // }
        var startTime = new Date().getTime();
        try {
            for (var _d = true, _e = __asyncValues(waitGenerator(5)), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                _c = _f.value;
                _d = false;
                const val = _c;
                console.log(`Time in generator loop: ${new Date().getTime() - startTime}`);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
}
//main();
const startTime = new Date().getTime();
// Function that returns a promise that resolves after a specified duration
function delay2(duration, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), duration));
}
// Array of durations for each delay
const durations = [1000, 2000, 3000]; // Delays in milliseconds
// Async function to iterate over the durations array and execute delays sequentially
function runDelaysSequentially(duration) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const duration of durations) {
            const result = yield delay2(duration, `Task completed after ${duration}ms`);
            console.log(`Time in generator loop: ${new Date().getTime() - startTime}`);
            console.log(result);
        }
    });
}
// Call the function
runDelaysSequentially(durations);
