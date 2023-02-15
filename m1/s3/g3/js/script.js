
let buttonAdd = document.getElementById('aggiungi');
let lists = document.getElementById('lista');
let textInput = document.querySelector('.textInput');

buttonAdd.addEventListener('click', generateList);

function generateList(event) {
    event.preventDefault();

    if (textInput.value === '') return;

    let li =  document.createElement('li');
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));
    
    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.appendChild(document.createTextNode('X'));    
    li.appendChild(buttonDelete);
    
    textInput.value = '';
    
    buttonDelete.addEventListener('click', (event) =>{
        let parentNodeEl = event.target.parentNode;
        setTimeout(() =>{
            parentNodeEl.remove();
        }, 500)
        
    });

}

// ho provato a studiare come mettere questa logica in un costruttore ma non ci sono riuscito. l'esercizio è stato copiato in parte su internet per capire la logica dei metodi. approfondirò il costruttore dopo le ore di prova.

