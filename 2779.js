let total = parseInt(lines.shift())
let cards = parseInt(lines.shift())
let deck = []
let cont = 0
let temp
for(let i =0; i< cards; i++){
    let card = parseInt(lines.shift())
    deck.push(card)
}
console.log(total - [...new Set(deck)].length)

//correção

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "10\n3\n5\n8\n3\n"
var lines = input.split('\n');

let capacidade = parseInt(lines[0])
let pacote = parseInt(lines[1])

let novas = new Set()
for(let i=2; i <= pacote+1; i++){
    novas.add(lines[i])
}
let faltam = capacidade - novas.size
console.log(faltam)