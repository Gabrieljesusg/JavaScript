/* Oque são estruturas de controle?

Os programas são executados de cima para baixo;
Com estas estruturas podemos alterar o fluxo de execução;
O caminho dependerá das condições e comparações
As principais são if e else */

// APRENDENDO O USO DO IF 

const m = 10;
if (m >5) {
 console.log('M é maior do que 5');
}

const user = 'João'

if(user === 'João') {
  console.log('Olá João!')
}
if (user === 'Maria'){
  console.log('olá maria')
}

console.log(user === 'joão1', user === 'Maria')


// APRENDENDO O USO DO ELSE

/* O else executa quando o if não atende sua condição
ou seja, não temos um bloco de validação, apenas do que será executado;
Aid3eia é: execute algo SE x > 5, SE NÃO execute isto,; */

const loggedIn = false

if(loggedIn){
  console.log('Está Autenticado');
} else{
  console.log('Não está autenticado')
}

const q = 10
const w = 15

if( q > 5 && w > 20){
  console.log('Números mais altos ')
} else{
  console.log("Os Números não são mais altos")
}

// Aprendendo o uso de ELSE IF

/* O else if é uma estrutura intermediária de if e do else;
  É possível adicionar novas condições, como no if;
  Assim temos a possibilidade de criar várias validações, para resolver nosso problema;
  */

  if (1> 2){
    console.log('teste')
  } else if(2 > 3){
    console.log('Teste 2')
  } else if(5 > 1){
    console.log('Agora sim!')
  }

  const userName =  'Gabriel'
  const userAge = 21

  if(userName === 'Jesus'){
    console.log('Bem vindo Jesus!')
  } else if (userName === 'Gabriel' && userAge === 21){
    console.log('Olá Gabriel, você tem 21 anos de idade!')
  } else {
    console.log('Nenhuma condição aceita!')
  }

