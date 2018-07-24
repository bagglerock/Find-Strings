'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the findStrings function below.
 */
function findStrings(w, queries) {
    
    let substringsArray = [];
    let combined = [];
    
    for (let i = 0; i < w.length; i++){
        let substrings = [];
        for (let j = 0; j < w[i].length; j++){
            for (let k = 0; k < w[i].length; k++){
                if (j !== k && j < k){
                    let ss = w[i].substring(j , k + 1);
                    substrings.push(ss);
                } else if (j === k){
                    let ss = w[i][j];
                    substrings.push(ss);
                }
                
            }
        }
        substringsArray.push(substrings);
        

    }
    if (substringsArray.length > 1){
        for (let i = 0; i < substringsArray.length - 1; i++){
            combined = substringsArray[i].concat(substringsArray[i+1]);
        }
    }

    console.log(combined);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wCount = parseInt(readLine(), 10);

    let w = [];

    for (let wItr = 0; wItr < wCount; wItr++) {
        const wItem = readLine();
        w.push(wItem);
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = findStrings(w, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}