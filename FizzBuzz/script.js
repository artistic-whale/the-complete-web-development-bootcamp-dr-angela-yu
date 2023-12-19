'use strict';

let output = [];
let functionCalls = 1;

function fizzBuzz() {
    // PROBLEM: Each time the function gets called, the array has to add a incremental number to the end of the array.
    
    // TODO 1: Execute the function multiple times
    // TODO 2: Add an incremental number to the end of the array after every execution 
    // TODO 3: Use a for-loop
    // TODO 4: Use array.push()

    // Example: fizzBuzz();
    // Output: [1]
    // Example: fizzBuzz();
    // Output: [1, 2]
    // ...

    
    output.push(functionCalls);
    functionCalls++;
    // for (functionCalls; functionCalls < 11; functionCalls++) {
        //     output.push(functionCalls);
    // }
    console.log(output);
}

fizzBuzz();