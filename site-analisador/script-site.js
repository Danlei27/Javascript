var ln = []
var soma = 0
var média = 0
var men = 0
var mai = 0

function listar(){
    var list = window.document.querySelector('select#listar')
    var nums = window.document.querySelector('input#num')
    var n = Number(nums.value)
    nums.value = ''
    exibir.innerHTML = ''
    nums.focus()
    if (n <= 100 && n >= 1){    
        if (ln.indexOf(n) < 0 ){
            ln.push(n)
            list.innerHTML +=`<option> Valor ${n} adicionado.</option>`
            soma  += n
            média = soma / ln.length
            if (ln.length == 1){
                    mai = n
                    men = n
                }else{
                    if(mai < n){
                        mai = n
                    }else if (men > n){
                        men = n
                    }
                }
        }else{
            window.alert(`O valor ${n} já foi adicionado!`)
        }
    }else{
        window.alert('valor não está entre 1 e 100')        
    }
}  
function info(){
    var exibir = window.document.querySelector('div#exibir')
    if(ln.length == 0){
       window.alert('Não há valor, para ser visualizado!')
    }else{
       exibir.innerHTML = `<p>Ao todo, temos ${ln.length} múmeros cadastrados.</p>
       <p>O maior valor informado foi ${mai}.</p>
       <p>O menor valor informado foi ${men}.</p>
       <p>Somando todos os valores, temos ${soma}.</p>
<p>A média dos valores digitados é ${média.toFixed(1)} .</p>`
   }
}