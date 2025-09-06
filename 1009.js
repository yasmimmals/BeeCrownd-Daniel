var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// basta sair usando o vetor lines
let fixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])
let comissao = (vendas * 15 / 30)
let final = fixo + comissao 

console.log(`Total = R$ ${final.toFixed(2)}`)

//