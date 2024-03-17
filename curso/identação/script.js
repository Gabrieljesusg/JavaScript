// A importância da identação

/* A identação é um recurso utilizado para organizar múltiplos blocos de código;
Utilizamos o tab para criar um nível de identação;
O código funciona sem, porém é interessante a adição deste recurso */

for(let u = 0; u < 10; u++){
  if(u * 2 > 10 ){
    console.log(`Maior que 10 ${u}`)
  } else {
    if(u / 2 === 0 ){
      console.log('deu 0')
    }
  }
}