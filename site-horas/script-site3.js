function carregar(){
    var hatual = new Date()
    var hatual = hatual.getHours()
    var h = window.document.querySelector('div#horas')
    var c = window.document.querySelector('div#comp')

    h.innerHTML = `Agora são ${hatual}`

    if (hatual > 11 && hatual <= 18 ){
        
        c.innerHTML = `<img id="comp" src="imagens/tarde.png">`
        document.body.style.background = '#a15f2f'

    }else if (hatual > 18 && hatual <= 24){

        c.innerHTML = `<img id="comp" src="imagens/noite.png">`
        document.body.style.background = '#004a67'

    }else if  (hatual > 1 && hatual <=11){

        c.innerHTML = `<img id="comp" src="imagens/dia.png">`  
        document.body.style.background = '#f4cfa2'
    }
}    