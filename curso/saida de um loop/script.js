/* FORÇANDO A SAIDA DE UM LOOP */
/* Com a instrução de break podemos ejetar um loop, fazendo que com as repetições cessem;
isso pode poupar memória, pois o código será executado menos vezes
não é tão comum, mas é um recurso válido da linguagem */


for(let g = 20; g > 10; g--){
  console.log(`o valor de g é ${g}`);
  if( g === 15 ){
    console.log('o g é 15');
    break;
  }
}


/* PULANDO UMA EXECUÇÃO DE LOOP
A palavra reservada continue, pode pular uma ou mais execuções do loop;
é um recurso utilizado de forma semelhante ao break;
 */

for(let s = 0; s < 10; s = s + 1){
  if(s % 2 === 0){
    console.log('número par');
    continue;
  }
    console.log(s);
}


