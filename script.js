let lista = [];

do {
  var aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista.');

  if (aux == 'sair') {
    alert('Saindo da aplicação.')
  } else if (aux == null || aux == '' || aux == ' ') {
    alert('Opção inválida!')
  }
  else {

    lista.push(aux)
    alert('Propiedade adicionada.');
    do {
      console.log(lista);
      aux = prompt('Digite a propriedade que você deseja adicionar a lista ou escreva "sair" para apresentar a lista.');
      console.log(aux);
      if (aux == 'sair') {
        alert('saindo')
      } else if (aux == null || aux == '' || aux == ' ') {
        alert('opção inválida')
      } else {
        lista.push(aux);
        console.log(lista);
        lista.sort();
        alert('Propiedade adicionada.');
      }
    } while (aux != 'sair')
  }

  if (lista[0] == '' && aux == 'sair') {
    alert('Lista vazia')
  } else {
    alert(lista)
  }

} while (aux == null || aux == '' || aux == ' ')