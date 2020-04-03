var inputElement = document.querySelector('input#todo');
var ulElement = document.querySelector('ul#list');
var btnadd = document.querySelector('input#add');

btnadd.onclick = addtodo;

var todos = [ 
    'Fazer café',
    'Estudar javascript', 
    'Acessar comunidade'
];
function rendertudo(){
    ulElement.innerHTML = '';
    for (todo of todos){
        linkElement = document.createElement('a');
        var linktext = document.createTextNode('Excluir');
        var text = document.createTextNode(todo);
        var liElement = document.createElement('li');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('id', `${todos.indexOf(todo)}`)
        linkElement.appendChild(linktext);
        linkElement.onclick = deletetodo;
        liElement.appendChild(text);
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
    }     
}   
function deletetodo(){
    var pos = this.id
    todos.splice(pos, 1)
    rendertudo()        
   
}
function addtodo(){
    var textinput = inputElement.value;
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



