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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("readline/promises"));
const process_1 = require("process");
function fetchPokemon(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // //Promise based solution
        // const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        //     .then(resp => {
        //     return resp.json(); //returning a value from .then() returns 
        //     // a promise that is immediately resolved to the return value
        // })
        //     .then(data => console.log(data.name))
        const pokemonSelected = [];
        const rl = promises_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
        // // async await solution, with loop
        // for (let i = 3; i < 5; i++){
        //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        //     const json = await response.json();
        //     console.log(json.name);
        //     const pokemonFound = json.name;
        //     const select = await rl.question(`Do you want to select ${pokemonFound}?`);
        //     if (select.match(/^(?:yes)|y$/i)) {
        //         console.log (`Okay, keeping ${pokemonFound}.`);
        //         pokemonSelected.push(pokemonFound);
        //     }
        // }
        // async await with generator. Good for lazy loading?
        const pokemonGenerator = fetchPokemonRange(5, 12);
        let result = pokemonGenerator.next();
        while (!result.done) {
            try {
                const pokemonFound = yield result.value;
                //console.log(`pokemonFound: `)
                //console.log(pokemonFound)
                if (typeof (pokemonFound === null || pokemonFound === void 0 ? void 0 : pokemonFound.name) === "string") {
                    const select = yield rl.question(`Do you want to select ${pokemonFound.name}?`);
                    if (select.match(/^(?:yes)|y$/i)) {
                        console.log(`Okay, keeping ${pokemonFound.name}.`);
                        pokemonSelected.push(pokemonFound.name);
                    }
                }
                result = pokemonGenerator.next();
            }
            catch (error) {
                console.error("Error fetching user:'", error);
                result = pokemonGenerator.next();
            }
        }
        rl.close();
        console.log(`Selected pokemon: ${pokemonSelected}`);
    });
}
function* fetchPokemonRange(startID, endID) {
    for (let i = startID; i <= endID; i++) {
        yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json());
        // I thought I was returning a promise, but instead I'm returning the generator. right, right.
    }
}
fetchPokemon(2);
