var agora = new Date()
var hora = agora.getHours(9)

console.log(`Agora são exatamente ${agora} horas`)
if (hora < 12){
  console.log('Bom Dia')
} else if (hora < 19){
  console.log('Boa Tarde')
} else {
  console.log('Boa noite')
}