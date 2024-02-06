function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12){
    // Bom dia
    img.src = 'assets/imgmanha.jpg'
    msg.innerHTML = `Agora são ${hora} horas, tenha uma boa manhã!`
    document.body.style.background = '#adb99d'

  } else if( hora >= 12 && hora <=18 ){
    // Boa Tarde
    img.src = 'assets/imgtarde.jpg'
    msg.innerHTML = `Agora são ${hora} horas,  tenha uma boa tarde!`
    document.body.style.background = '#d7b52c'
    
  } else {
    // Boa Noite
    img.src = 'assets/imgnoite.jpg'
    msg.innerHTML = `Agora são ${hora} horas, tenha uma boa noite!`
    document.body.style.background = '#262010'
    
  }
}
