var prompt = require('prompt-sync')();

let lista = [];

do {
  var aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista.');

  if (aux == 'sair') {
    console.log('Saindo da aplicação.')
  } else if (aux == null || aux == '' || aux == ' ') {
    console.log('Opção inválida!')
  }
  else {

    lista.push(aux)
    console.log('Propiedade adicionada.');
    do {
      console.log(lista);
      aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista.');
      console.log(aux);
      if (aux == 'sair') {
        console.log('saindo')
      } else if (aux == null || aux == '' || aux == ' ') {
        console.log('opção inválida')
      } else {
        lista.push(aux);
        console.log(lista);
        lista.sort();
        console.log('Propiedade adicionada.');
      }
    } while (aux != 'sair')
  }

  if (lista[0] == '' && aux == 'sair') {
    console.log('Lista vazia')
  } else {
    console.log(lista)
  }

} while (aux == null || aux == '' || aux == ' ')