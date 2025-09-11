//input.split(/\s+/) qualquer string de espaço é um divisor
// achou um espaço dividi 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);
let i = 0
while (i < lines.length){
    let x = parseInt(lines[i++]) // largura da peça da empresa
    let y = parseInt(lines[i++]) // altura da peça da empresa
    let p = parseInt(lines[i++]) // qtde de peças
    for(let j = 0; j < p; j++){
        let Xi = parseInt(lines[i++]) // largura da peça do cliente
        let Yi = parseInt(lines[i++]) // altura da peça do cliente
        if ((Xi <= x && Yi <= y)||(Xi <= y && Yi <= x)){
            console.log('Sim')
        }
        else {
            console.log('Nao')
        }
    }
}