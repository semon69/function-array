function sumOfArray(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    
    }
    return sum;
}

function getOddNumbers(numbers){
    let oddnum = [];
    for (let i = 0; i <numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 ==1){
            console.log(index, element)
            oddnum.push(element);
        }
    }
    return oddnum;
}

let myNumber = [12, 13, 45, 66, 98, 91, 34, 50];

let oddnumbers = getOddNumbers(myNumber);
console.log(oddnumbers);
let oddNumSum = sumOfArray(oddnumbers);
console.log('Sum of odd numbers', oddNumSum)

