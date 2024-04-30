import readline from "readline/promises";
import { stdin as input, stdout as output} from 'process';

async function fetchPokemon(id: number): Promise<void> {
    
    // //Promise based solution
    // const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then(resp => {
    //     return resp.json(); //returning a value from .then() returns 
    //     // a promise that is immediately resolved to the return value
    // })
    //     .then(data => console.log(data.name))

    const pokemonSelected: string[] = [];
    const rl = readline.createInterface({input, output});

    for (let i = 3; i < 5; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const json = await response.json();
        console.log(json.name);
        const pokemonFound = json.name;
        const select = await rl.question(`Do you want to select ${pokemonFound}?`);
        if (select.match(/^(?:yes)|y$/i)) {
            console.log (`Okay, keeping ${pokemonFound}.`);
            pokemonSelected.push(pokemonFound);
        }
    }
    
    rl.close();

    console.log(`Selected pokemon: ${pokemonSelected}`)
}

fetchPokemon(2)