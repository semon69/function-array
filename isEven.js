function isEven(number){
    const modulus = number % 2;
    if (modulus == 0){
        return true;
    }else{
        return false;
    }
}

const myNumber = isEven(33349);
console.log(myNumber);
const tarNumber = isEven(3334944);
console.log(tarNumber);