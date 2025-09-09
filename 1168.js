// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input = "3\n115380\n2819311\n23456"

var lines = input.split('\n');

let leds = {
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6,
    '0': 6
}
let qtdeNros = parseInt(lines[0])
for(let i=1; i <= qtdeNros; i++){
    let numero = lines[i].trim()
    let soma = 0
    for(let j=0;j<numero.length;j++){
        soma += leds[numero[j]]
    }
    console.log(`${soma} leds`)
}