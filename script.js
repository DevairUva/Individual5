var prompt = require('prompt-sync')();

let lista = [];

let sair = '';

var aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista. ');

do {

  if (aux == 'sair') {
    console.log('Saindo da aplicação.')
    sair = aux;
  } else if (aux == null || aux == '' || aux == ' ') {
    console.log('Opção inválida!')
  } else {
    lista.push(aux)
    console.log('Propiedade adicionada.');
    do {
      console.log(lista);
      aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista. ');
      if (aux == 'sair') {
        console.log('Saindo da aplicação')
      } else if (aux == null || aux == '' || aux == ' ') {
        console.log('Opção inválida')
      } else {
        lista.push(aux);
        lista.sort();
        console.log('Propiedade adicionada.');
      }
    } while (aux != 'sair')
  }

  if (lista[0] == '' || sair == aux) {
    console.log('Lista vazia')
  } else {
    console.log('Lista final:')
    for (i = 0; i < lista.length; i++) {
      console.log(`${lista[i]}\n` );
    }
  }

} while (aux == null || aux == '' || aux == ' ')