// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollars){
    return valueInDollars * 115.23;
    
}

const fromYenToPound = function(valueInYen){
    return valueInYen * 0.74;
}

const fromEuroToBitcoin = function(valueInEuro){
    return valueInEuro * 36000;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, fromEuroToBitcoin };