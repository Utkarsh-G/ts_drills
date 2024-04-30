import readline from "readline/promises";
import { stdin as input, stdout as output} from 'process';

interface ApiResponse {
    id: number;
    name: string;
}


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
            const pokemonFound: ApiResponse = await result.value as ApiResponse;
            //console.log(`pokemonFound: `)
            //console.log(pokemonFound)
            if (typeof pokemonFound?.name === "string"){
                const select = await rl.question(`Do you want to select ${pokemonFound.name}?`);
            if (select.match(/^(?:yes)|y$/i)) {
                console.log (`Okay, keeping ${pokemonFound.name}.`);
                pokemonSelected.push(pokemonFound.name);
            }
            }
            
            result = pokemonGenerator.next();
        } catch (error) {
            console.error("Error fetching user:'", error);
            result = pokemonGenerator.next();
        }
    }
    
    rl.close();

    console.log(`Selected pokemon: ${pokemonSelected}`)
}

function* fetchPokemonRange(startID: number, endID: number): Generator {
    for (let i = startID; i <= endID; i++ ){
        yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json());
        // I thought I was returning a promise, but instead I'm returning the generator. right, right.
    }
}

fetchPokemon(2)