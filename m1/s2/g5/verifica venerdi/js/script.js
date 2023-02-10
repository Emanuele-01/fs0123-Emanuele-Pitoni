function Simbolo(elemento){
    
    let carattere = elemento.getAttribute('data-simbolo');

    let display = document.querySelector('#display');
    display.value += carattere;

}
function uguale(){
    let display = document.querySelector('#display');

    display.value = eval(display.value);
}
function cancella(){
    let display = document.querySelector('#display').value=" ";
    display.value += eval(display.value);

}