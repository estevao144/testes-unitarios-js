/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/



const average = (myArray) => {
  let soma = 0;
 if (myArray.length === 0) {
  return undefined;
 } 
for (let index = 0; index < myArray.length; index++) {
  if (typeof myArray[index] !=='number') {
    return undefined;
  }else {
    
  soma += myArray[index];
    }
  } return Math.round(soma / myArray.length);
};



module.exports = average;
