function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genero = 'Homem'
      if (idade >= 10 && idade < 10){
       img.setAttribute('src', 'assets/homemcrianca.jpg')  
      } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'assets/homemjovem.jpg')
      } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'assets/homemadulto.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/homemvelho.jpg')
      }
    } else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 10 && idade <10){
        //criança
        img.setAttribute('src', 'assets/mulhercrianca.jpg')
      } else if (idade < 21){
        // jovem
        img.setAttribute('src', 'assets/mulherjovem.jpg')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'assets/mulheradulta.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/mulhervelha.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
  }
}