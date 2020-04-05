// let divTest = document.querySelector('div#test')
// divTest.setAttribute('onclick', 'funtest()') 

// function funtest(){
    // alert('Bem vindo ao seu site!')
// }
let text = []
for(let con = 0 ; con < 4; con++){
    text.push (`texto número ${con}`)

}
let divTest = document.querySelector('div#d')
function exibir(){
    divTest.innerHTML = ''
    for(let cont = 0; cont < text.length ; cont++){
        divTest.innerHTML += `<p>${text[cont]}</p>`
        let eEle = document.querySelectorAll('p')[cont]
        eEle.setAttribute('onclick', `func(${cont})`)

   }
}
exibir()

function func(i){
    alert(`apagar ${text[i]}`)
    text.splice(i, 1)
    exibir()
    
}

