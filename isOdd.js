function isOdd(number){
    const reminder = number % 2;
    if (reminder == 1){
        return true;
    }else{
        return false;
    }
}

const baperNumber = isOdd(93489357);
console.log(baperNumber);

const marNumber = isOdd(346538);
console.log(marNumber);