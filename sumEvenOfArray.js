function findIndexArray(numbers){
    sum = 0;
    for(var i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[i];
        sum = sum+element;
        // console.log(index, element, sum);
    }
    return sum;
}

function sumEvenOfArray(numbers){
    let even = [];
    for(var i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[i];
        if(element % 2 == 0){
            console.log(index, element);
            even.push(element);
        }
    }
    return even;
}

const myNumber = [33, 44, 53, 94, 78, 12, 111, 99, 66, 45];
let evenNumberOfArray = sumEvenOfArray(myNumber);
console.log(evenNumberOfArray);

let evenNumber = findIndexArray(evenNumberOfArray);
console.log("sum of even numbers:", evenNumber);