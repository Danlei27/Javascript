var inputElement = document.querySelector('input#todo');
var ulElement = document.querySelector('ul#list');
var add = document.querySelector('input#add');

var todos = [ 
    'Fazer café',
    'Estudar javascript', 
    'Acessar comunidade'
];
function rendertudo(){
    ulElement.innerHTML = '';
    for (todo of todos){
        var liElement= document.createElement('li');
        var text = document.createTextNode(todo);
        liElement.appendChild(text);
        ulElement.appendChild(liElement);
        
    }     
}   
rendertudo();

function addtodo(){
    var textinput = inputElement.value;
    todos.push(textinput);
    rendertudo();
    inputElement = ''; 
    
    
}

function adicionar(){
    addtodo();
}