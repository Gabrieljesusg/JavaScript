/* O switch pode ser utilizado para organização de um excesso de if/else
Cada if seria um case
Para cada case temos que adicionar um break
e temos o default que é como o else */

const job = 'Programador'

switch(job){
  case 'Programador':
    console.log('Você é um Programador')
    break
  case "Advogado":
    console.log('Você é um Advogado')
    break
  case 'Engenheiro':
    console.log("Você é um Engenheiro")
    break
  default:
    console.log('Profissão não encontrada')
}

// Switch errado NÃO UTILIZANDO O BREAK!
const l = 100;
switch(l){
  case 200:
    console.log('L é 200!');
  case 100:
      console.log('L é 100!');
  case 10:
        console.log('L é 10!');
  default:
    console.log('L não foi Encontrado')
}