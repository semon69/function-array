// function factorial(number){
//     let result = 1;
//     for(let i = number; i>=1; i--){
//         result = result*i;
        
//     }
//     return result;
// }

// const mynum = factorial(3);
// console.log(mynum);


// while loop

function factorial(number){
    let i = number;
    let result = 1;
    while(i>=1){
        result = result*i;
        i--;
    }
    return result;
}
console.log(factorial(7));