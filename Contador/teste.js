// comentario de linha

/* comentario de bloco 
var y = 0;
var x = 1;
*/

var preco;
const VALOR = 155;
preco = VALOR - 100;

function soma(a,b) {
    return a + b;    
}
soma(100,55);
console.log(soma(100,55));

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        //const element = array[i];
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }else{
            console.log(array[i], ' Nao eh par');
        }
        
    }
    console.log('Numeros pares: ' , evenNums);
}
let valores = [1,2,3,4,5,6,7,8,9,10];
returnEvenValues(valores);
