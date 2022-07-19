const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
        
  // });

    // Teste se productDetails é uma função.
  it('Verifica se productDetails é uma função.',() => {

    expect(typeof productDetails).toBe("function");

  });
  
// Teste se o retorno da função é um array.

// it('Verifica se o retorno da função é um array.', () => {

// });

// Teste se o array retornado pela função contém dois itens dentro.
it('Verifica se o array retornado pela função contém dois itens dentro.', () => {

  expect(Object.keys(productDetails('alcool', 'mascara'))).toHaveLength(2);

});
    
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.

it('verifica se os dois itens dentro do array retornado pela função são objetos.', ()=>{

  expect( typeof( productDetails('alcool', 'mascara')[0])).toBe('object')
  expect( typeof( productDetails('alcool', 'mascara')[1])).toBe('object')

})    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', ()=>{

      expect((productDetails('alcool', 'mascara')[0])).not.toBe((productDetails('alcool', 'mascara')[1]));

    })


    // Teste se os dois productIds terminam com 123.
    it('Verifica se os dois productIds terminam com 123.',()=>{

      expect(productDetails('alcool', 'mascara')[0].details.productId.endsWith('123')).toBe(true);

    });
    


});
