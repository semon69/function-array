function milesToKm(miles){
    const km = miles * 1.62;
    return km;
}

let mykm = milesToKm(5);
mykm2 = mykm.toFixed(2);
console.log(parseFloat(mykm2));

const dadaKm = milesToKm(40);
console.log(dadaKm);