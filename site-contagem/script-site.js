function contar(){
    var num = window.document.getElementsByClassName('num')
    var cont = window.document.querySelector('div#contar')
    var i = Number(num[0].value)
    var f = Number(num[1].value)
    var p = Number(num[2].value)
    if (i == 0 || f == 0){
        window.alert('valor inválido!')
    }else{
        cont.innerHTML = `Contando:<br>`
        for(i; i < f ;i += p ){
            cont.innerHTML += `${i} &#128073  `
        }
        cont.innerHTML += `🏴`
    }

}
