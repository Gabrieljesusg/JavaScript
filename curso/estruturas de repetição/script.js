/* O que são estruturas de repetição

um bloco de código que se repete até uma condição ser satisfeita;
isso evita a repetição desnecessária do nosso código;
Algumas das estruturas são: for e while;
As suas sintaxes são diferentes, mas as duas chegam no mesmo resultado;
Temos que nos atentar ao loop infinito*/

//Estrutura de repetição While
/* O while faz uma ação até que uma condição seja atingida;
No bloco definimos o fim do loop, que é a condição;
Temos que definir também um incrementador, que é quem faz a condição ser atingida;
 */

/*
let p = 0

while(p < 5){
  console.log(`repetindo ${p}`)
  p = p + 1;

}
*/
//loop infinito
/*


let x = 10
 while(x > 5){
  console.log(`Imprimindo `)
 }
/*
 /* Estrutura de repetição : for
 
 Ela condensa toda lógica em uma linha, ao primeiro olhar parece mais complexa, mas simplificada as coisas;
 Na própria declaração, colocamos: incrementador, condição, condição final e progressão;
 INCREMENTADOR -- CONDIÇÃO FINAL E PROGRESSÃO */

  for (let t = 0; t < 10; t++){
    console.log('repetindo')
  }

  let  r = 10;
  for(r; r > 0; r = r - 1){
 console.log('O r está diminuindo')
  }

 

