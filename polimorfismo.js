let render = function(doc,win){
  'use strict';
  let inputEle = doc.querySelectorAll('input');
  let body = doc.querySelector('body');
  let alerta =(event)=>{
    body.style.backgroundColor = event.target.dataset.color;
  };
  for(let i = 0; i< 3; i++){
    inputEle[i].addEventListener('click', alerta, false);
  }
};
render(document,window);