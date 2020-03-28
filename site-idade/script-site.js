
 function carregar(){
     var dataa = new Date()
     var dataa = dataa.getFullYear()
     var gene = ''
     var sexm = window.document.getElementsByName('sex')
     var g = window.document.querySelector('p#res')
     var data = window.document.querySelector('input#nas')
     var img = document.createElement('img')
     var ida = dataa - Number(data.value)
     img.getAttribute('id','foto')
     g.style.textAlign = 'center'
     g.style.marginTop = '10px'
     if (data.value.length == 0 || Number(data.value) > dataa){
         alert('opção iválida!')
        }else{
            if (sexm[0].checked){
                gene = 'Homem'
                if (ida <= 12){
                    img.setAttribute('src','imagens/criança-m.png')
                }else if (ida > 12 && ida <= 21){
                    img.setAttribute('src','imagens/jovem-m.png')
                }else if (ida > 21 && ida <= 45){
                    img.setAttribute('src', 'imagens/adulto-m.png')
                }else{
                    img.setAttribute('src', 'imagens/idoso-m.png')
                }
                
            }else{
                gene = 'Mulher'
                if (ida <= 12){
                    img.setAttribute('src','imagens/criança-f.png')
                }else if (ida > 12 && ida <= 21){
                    img.setAttribute('src','imagens/jovem-f.png')
                }else if (ida > 21 && ida <= 45){
                    img.setAttribute('src', 'imagens/adulto-f.png')
                }else{
                    img.setAttribute('src', 'imagens/idoso-f.png')
                }
            }
            g.innerHTML = `Detectamos ${gene} com ${ida} anos<br>`
            g.appendChild(img)
            
        }
}
