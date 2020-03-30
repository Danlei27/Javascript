/* função, soma dois valores */

/*  function soma(n1=0, n2=0){
       return n1 + n2
}
console.log(soma(10, 5)) */

/*função, retorna fatorial de um número*/

/* function fatorial(n){
        for(var c = 1 ;n > 1; n--){
            c *= n 
            
            console.log(c)
        }       
}
fatorial(5) */


/*função contador, dentro de uma variavel  */

/* var cont = function(n1=0, n2=0){
    console.log(`contando de ${n1} até ${n2} `)
    for(var c = ''; n1 < n2+1; n1++){
           c += String(n1+'>')   
    }
    console.log(c)
}
cont(10, 20)  */

/* FUNÇÃO FATORIAL, DE FORMA RECURSIVA */
function fatorialrecur(n2){
    function fatorial(n){
        for(var c = 1; n != 1;n--){
            c *= n
            
        }console.log(n2*c) 
    }
    fatorial(n2-1)
}
fatorialrecur(5)