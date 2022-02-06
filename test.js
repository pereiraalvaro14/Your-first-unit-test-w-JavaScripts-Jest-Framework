// importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, fromEuroToBitcoin } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 115.23 yen", function(){
    expect(fromDollarToYen (3.5)).toBe(403.305)});

test("One yen should be 0.74 pound", function(){
    expect(fromYenToPound (3.5)).toBe(2.59)})

test("One euro should be 36000 bitcoin", function(){
    expect(fromEuroToBitcoin (1)).toBe(36000)});