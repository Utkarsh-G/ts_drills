import readline from "readline/promises";
import { stdin as input, stdout as output} from 'process';

interface ApiResponse {
    id: number;
    name: string;
}


async function fetchPokemonConcurrently(id: number): Promise<void> {
    
    const pokemonSelected: string[] = [];
    const rl = readline.createInterface({input, output});

    var startTime = new Date().getTime();

    //Promise based solution
    const promises: any[] = [];
    for (let i = 0; i < id; i++){
        promises[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${id+i}`).then(resp => resp.json())
    }
    
    Promise.all(promises)
    .then(data => {
        data.forEach((value, index) => console.log(index+"  "+value.name));
        var endTime = new Date().getTime();
        console.log(`Time total for parallel promises: ${endTime - startTime}`)
    })

    var endTime = new Date().getTime();
    console.log(`Time after setting up promises.all: ${endTime - startTime}`)
    
    rl.close();

    //console.log(`Selected pokemon: ${pokemonSelected}`)
}

//fetchPokemonConcurrently(100);

async function fetchPokemonSequentially(id: number): Promise<void> {

    const pokemonSelected: string[] = [];
    const rl = readline.createInterface({input, output});

    var startTime = new Date().getTime();

    //Promise based solution
    const promises: any[] = [];
    for (let i = 0; i < id; i++){
        promises[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${id+i}`).then(resp => resp.json())
    }

    for await(const p of promises) {
        const result = await p;
        console.log(result.name);
        // var endTime = new Date().getTime();
        // console.log(`Time: ${endTime - startTime}`)
    }
    var endTime = new Date().getTime();
    console.log(`Time total for sequential promises: ${endTime - startTime}`)
    
    rl.close();

    //console.log(`Selected pokemon: ${pokemonSelected}`)
}

// fetchPokemonSequentially(100);

function delay(t: number) {
    return new Promise(resolve => setTimeout(resolve, t));
}

async function waitConcurrently(id: number): Promise<void> {
    
    var startTime = new Date().getTime();

    //Promise based solution
    const promises: any[] = [];
    for (let i = 0; i < id; i++){
        promises[i] = delay(2000)
    }
    
    Promise.all(promises)
    .then(_ => {
        //data.forEach((value, index) => console.log(index+"  "+value.name));
        var endTime = new Date().getTime();
        console.log(`Time total for parallel promises: ${endTime - startTime}`)
    })

    var endTime = new Date().getTime();
    console.log(`Time after setting up promises.all: ${endTime - startTime}`)
    
}

//waitConcurrently(10);

async function waitSequentially(id: number): Promise<void> {
    
    var startTime = new Date().getTime();

    //Promise based solution
    const promises: any[] = [];
    for (let i = 0; i < id; i++){
        promises[i] = delay(1000 + i*150)
    }

    for (const p of promises) {
        var endTime = new Date().getTime();
        console.log(`Time before an await: ${endTime - startTime}`)
        await p;
        //console.log(result.name);
        var endTime = new Date().getTime();
        console.log(`Time after an await: ${endTime - startTime}`)
    }

    // let result = promises.reduce( (accumulatorPromise) => {
    //     return accumulatorPromise.then(() => {
    //         console.log("here");
    //       return delay(150);
    //     });
    //   }, Promise.resolve());

    var endTime = new Date().getTime();
    console.log(`Time after setting up sequential call: ${endTime - startTime}`)
    
}

//waitSequentially(5); // 10 seconds


async function* waitGenerator(id: number): AsyncGenerator {
    
    var startTime = new Date().getTime();

    //Promise based solution
    const promises: any[] = [];
    for (let i = 0; i < id; i++){
        promises[i] = delay(1000 + i*150)
    }

    for (const p of promises) {

        var endTime = new Date().getTime();
        //console.log(`Time before an yield: ${endTime - startTime}`)

        yield await p.then();
        
        //console.log(result.name);
        var endTime = new Date().getTime();
        //console.log(`Time after resuming yield: ${endTime - startTime}`)
    }

    var endTime = new Date().getTime();
    //console.log(`Time after setting up sequential call: ${endTime - startTime}`)
    
}

async function main(){
    // const myGen = waitGenerator(5);
    // let result = myGen.next();
    // while (!result.done) {
    //     await result.value;
    //     result = myGen.next();
    // }
    var startTime = new Date().getTime();
    for await (const val of waitGenerator(5)){
        console.log(`Time in generator loop: ${new Date().getTime() - startTime}`)
    }
}

//main();

const startTime = new Date().getTime();

// Function that returns a promise that resolves after a specified duration
function delay2(duration: number, value:any) {
    return new Promise(resolve => setTimeout(() => resolve(value), duration));
}

// Array of durations for each delay
const durations: number[] = [1000, 2000, 3000]; // Delays in milliseconds

// Async function to iterate over the durations array and execute delays sequentially
async function runDelaysSequentially(duration: number[]) {
    for (const duration of durations) {
        const result = await delay2(duration, `Task completed after ${duration}ms`);
        console.log(`Time in generator loop: ${new Date().getTime() - startTime}`)
        console.log(result);
    }
}

// Call the function
runDelaysSequentially(durations);