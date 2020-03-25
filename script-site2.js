var date = new Date()
var horas = date.getHours()
var diasem = date.getDay()
var h = window.document.querySelector('div#horas')
alert('olá') 
h.innerHTML = `<strong>Agrora, são exatamente ${horas} horas!</strong>`

switch(diasem) {
	case 0:
	   	h.innerHTML += `<p>Domingo</p>`
		break
	case 1:
		h.innerHTML += `<p>Segunda</p>`
		break
	case 2:
		h.innerHTML += `<p>Terça</p>`
		break
	case 3:
		h.innerHTML += `<p>Quarta</p>`
		break
	case 4:
		h.innerHTML += `<p>Quinta</p>`
		break
	case 5:
		h.innerHTML += `<p>Sexta</p>`
		break
	case 6:
		h.innerHTML += `<p>Sábado</p>`
		break
	default:
	    h.innerHTML += `<p>[ERRO] Dia inválido!`
        break	    
}
if (horas > 11 && horas < 19){
	h.innerHTML += `<p>Boa tarde!</p>`
}else if (horas > 18 && horas <= 24){
	h.innerHTML += `<p>Boa Noite!</p>`
}else if (horas > 0 && horas < 7){
    h.innerHTML += `<p>Boa madrugada!</p>`
}else{
	h.innerHTML += `<p>Bom dia!</p>`
}