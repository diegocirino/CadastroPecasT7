let pesoPeca = 200
let numeroPecas = 10
let listPecas = ['Disco de Ferio', 'Motor', 'Pastilha de Freio', 'Pneu', 'Volante', 'Chassi', 'Disco de Freio']
let nomePeca = 'Disco de Freio'


if(pesoPeca > 100) {
  // Podemos cadastrar
  console.log('Peso adequado, podemos cadastrar')
} else {
  // Não podemos cadastrar
  console.log('Peso menor que 100g, não podemos cadastrar')
}

// Verificação do tamanho da lista de peças
if (listPecas.length >= 10) {
  // Capacidade máxima atingida
  console.log('Capacidade máxima atingida')
} else {
  // Ainda há espaço para cadastro
  console.log('Ainda há espaço para cadastro')
}

// Verificação do nome da peça
if (nomePeca.length < 3) {
  // Nome Inválido
  console.log('Nome inválido, o nome precisa ter 3 caracteres ou mais')
 } else {
   // Nome de peça adequado
   console.log('Nome adequado')
  }

  // node .\pecas.js
  // 





