function cal(){
    var n = window.document.querySelector('input#num')
    var s = window.document.querySelector('select#tab')
    var c = 1
    if (n.value.length == 0){
        window.alert('Valor inválido')
    }else{
         n = Number(n.value)
         s.innerHTML = `<option>${c} x ${n} = ${c * n}</option>`
         while (c < 10){
            c++
            s.innerHTML += `<option>${c} x ${n} = ${c * n}</option>`
        }   
    }
}  
