let inputElement = document.querySelector('input#todo');
let ulElement = document.querySelector('ul#list');
let btnadd = document.querySelector('input#add');

btnadd.onclick = addtodo;

let todos = [ 
    'Fazer café',
    'Estudar javascript', 
    'Acessar comunidade'
];
function rendertudo(){
    ulElement.innerHTML = '';
    for (todo of todos){
        linkElement = document.createElement('a');
        let linktext = document.createTextNode('Excluir');
        let text = document.createTextNode(todo);
        let liElement = document.createElement('li');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deletetodo(${todos.indexOf(todo)})`)
        linkElement.appendChild(linktext);
        liElement.appendChild(text);
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
    }     
}   
function deletetodo(pos){
    todos.splice(pos, 1)
    rendertudo()        
   
}
function addtodo(){
    let textinput = inputElement.value;
    inputElement.value = '';
    inputElement.focus();
    if (textinput.length > 0){
        todos.push(textinput);
        rendertudo();
    }else{
         alert('Ensira um valor! ');
    } 
}

rendertudo()



