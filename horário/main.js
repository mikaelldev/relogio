function carregar(){
  var menssagem = document.getElementById('menssagem')
  var imagem = document.getElementById('foto')
  var data = new Date
  let hora = data.getHours()
  var minutos = data.getMinutes()


  menssagem.innerHTML = `A hora atual é: ${hora} H ${minutos} min`

  if(hora > 5 && hora <=12){
    amanhecer.src = 'amanhecer.png'
    document.body.style.backgroundColor = 'rgb(213, 206, 0)'
  }else if(hora > 12 && hora <=18){
    amanhecer.src = 'entardecer.png'  
    document.body.style.backgroundColor = 'rgb(205, 98, 11)'
  }else{
    amanhecer.src = 'anoitecer.png'
    document.body.style.backgroundColor = 'rgb(27, 113, 189)'
  }

}
