/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    return l1*l2

}
console.log(area(5,10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(p1 ,p2){
    if(p1==p2){
        return (p1+p2)*3;
    }else{
        return  p1+p2;
    }
}
console.log(crazySum(2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a1,a2){
    let a3 = a1 - a2;
    if(a3 <= 19){
        return Math.abs(a3);
    }else{
        return Math.abs(a3 * 3);
    }
}
console.log(crazyDiff(12,19));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(p3){
    if(p3 >= 20 && 100 && p3 <= 20 && 100  || p3 == 400){
        return Boolean = true;
    }else{
        return Boolean = false;
    }
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(c1){
    if(c1 === "EPICODE"){
        return c1;
    }else{
        return "EPICODE" + " " + c1;
    }
}
console.log(epify("web"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(b1){
    if(b1 % 3 == 0 || b1 % 7 == 0){
        return Boolean = true;
    }else{
        return Boolean = false;
    }
}

console.log(check3and7(-6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (b2){
    let arr = b2.split("");
    let reverce = arr.reverse();
    let reverceString = reverce.join("");
    return reverceString;
}
console.log(reverseString("ciao"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(b4){
    let arr = b4.split("");
    let string = arr.join("");
    let upperString = string[0].toUpperCase() + string.slice (1);
    return upperString
}
console.log(upperFirst("ciao"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(c4){
    let arr = c4.split("");
    let string = arr.join("");
    let upperString = string.slice (1, -1);
    return upperString;
}
console.log(cutString("comeStai"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let array = [];
    for(i=0 ; i <= n ; i++){
        array.push(Math.floor(Math.random()* 11));
    }
    return array;
}
console.log(giveMeRandom(160));