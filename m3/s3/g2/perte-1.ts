
/*
ypeScript è la versione evoluta di javascript, le sue differenze sostanziali sono che in un linguaggio come quello di JavaScript a bassa tipizzazione una variabile viene definita 
con un valore iniziale che può essere: stringa, numero, booleano, undefinend o null, ma che potrà essere cambiata in futuro ogni volta che si vuole dando poca sicurezza sui dati in ingresso 
nella variabile. Con TypeScript questo non succede proprio perché la sostanziale differenza è il fatto che il linguaggio viene fortemente tipizzato così da essere sicuri che in una variabile
entri solamente una tipologia o più di dati scelte da noi. 
TypeScript però non può essere digerito dal Browser, quindi serve un Compilatore che trasformi il linguaggio TypeScript in JavaScript, così da essere compatibile con il Browser.
TypeScript aggiunge altre tipologie di dato che sono: stringa; numero, booleano, array, oggetto, null, undefinend, any, void, tuple, enun e generics.

Per la compilazione del codice basta aprire il terminale che può essere anche quello di VSC e fare il comando TSC e convertirà automaticamente tutti i file con lo stesso nome da TypeScript a JavaScript, se si vuole dare un'altro nome al file quando si compilerà basta aggiungere uno spazio e digitere il nome es.'tsc prova' in questo modo il file JavaScript nuovo si chiamerà 'prova'.
ogni volta che si fa una modifica nel file TypeScript e si vuole compilare nuovamente un file basta rieseguire il comando da terminale tsc. 
*/

// let number = 9;

// number = 'ciao'

// questo è un errore perchè la variabile number è stata inizializzata in number e quindi non potrà cambiare in string

// let aString : string; 

// in questo modo la variabile è stata inizializzata string senza mettere un valore però rimarra la regola che in questa variabile potra solamente entrare un valore string

// es.

let aNumber = 9

aNumber = 10

// ------

let aString : string;

aString = 'ciao'

/*
Esiste anche il modo per rendere la variabile uguale a quella di JavaScript cioè far entrare all'interno della variabile qualsiasi valore basta aggiungere nella tipizzazione la parola any che permetterà tutto ciò, non si usa mai anche perchè va a snaturalizzare il lavoro che fa TypeScript cioè la tipizzazione quindi si deve usare solo quando c'è un urgenza
*/ 

// es.

let num : any;

num = 9

num = 10

num = 'ciao'

// Come visto possiamo cambiare valore alla variabile 'num' ma anche tipoogia di dato

/* 
un'altro aggiornamento fatto in TypeScript è or e and che in JavaScript si scrive || è && in TypeScript ne basta una sola quindi | e & per dare una differenza ai due linguaggi, detto ciò c'è
la posssibilità di dare più tipologie di valori alle varabili usando or.
*/

// es.

let year : string | number;

year = 2023

year = 'duemilaventitre'

// come detto prime si può dare più di una tipologia quindi questa variabile accetterà sia un numero che una stringa ma rimane il fatto che non accetterà altri tipi di tado.

/* 
In TypeScript vengono tipizzati anche gli array quindi un array di stringe potrà accettare solamente nuovi dati di tipo stringa ma si può iniziallizzare la variabie con un array di 
sole stringe senza immettere un valore 
*/

// es. 

let myArr = ['1', '2', '3']

let newArr : string[];

newArr = ['1', '2', '3']

let numArr : number[]

numArr = [1, 2, 3]

// in questo caso è uguale ogni array può essere inizializzato con qualsiasi tipo di dato basta usare le [] alla fine del tipo di dato.

/* 
si possono utilizzare tutte le tipologie di lavorazione con gli array basta rispettare la tipologia di dato quindi nel metodo push() basta che all'interno la tipologia di dato sia uguale a quello dell'array, negli array nessuno ci vieta a mettere più di una tipologia di dato ma quando l'array sarà configuarato le tipologie di dato rimarrano sempre quelle e non ne acceterà altre
*/

// es.

let arr = [1, 'ciao', false]

let ArrayMix : (number | string | boolean)[];

let arrayMix2 : [string, number] = ['ciao', 1];

arr.push(2)

// questo è il modo di inizializzare un array con differenti tipologie di dato bisogna sempre ricordare che le tipologie vanno all'interno di parentesi tonde con alla fine [] oppure direttamente all'interno delle parentesi quadre però si dovra seguire l'ordine di tipologia di dato che sta all'interno delle quadre

/* 
nell'ogetto anche se sembra più complesso nella costruzione le regole rimangono tali e quali ma la tipoogia di dato si riferisce alle proprietà dell'ogetto quindi una proprietà inizializzata come string non potrà essere cambiata in number
*/

// es.

let myObj = {
    name : 'andrea',
    age : 18,
    man : true
}

// quindi in questo ogetto il name sarà di tipologia string, age di tipologia number e man di tipologia boolean

/* 
Abbiamo visto che si può usare l'or per mettere insieme più tipologie di dato ma esete un modo per farlo in modo più eficiente usando il costrutto type
*/

// es.

type stringOrNumber = string | number

let month : stringOrNumber;

month = 4

month = 'april'

// in questo caso il costrutto type serve per creare una scatla dove mettiao le tipologie che ci servono in quella variabie così che possono essere richiamate in più variabili usando una sola parola

/* 
TypeScript non si prende la responsabilità di dare una tipologia di dato ai parametri quindi dovremo dire noi che tipo di dato sarà cosi che la funzione non darà errore
*/

// es.

function sum(a:number, b:number):number{
return a + b
}

sum(2, 2)

let sumIron : (a: number, b: number) => number;

sumIron = (first: number , second: number) => {
    return first + second
}

sumIron(2, 2)
// in questa funzione il parametro a e b vegonono inizializzati come number quindi non si andrà in errore ma questa inizializzazione viene meno allora ci sarà un erorre e non si potrà procedere, si può dare una tipologia anche al return delle funzioni che in questo caso dovrà essere number. l'iron function si inizializza prima di crearla in una variabile, dove si dice prima di costruirla quale tipologia di dato tornerà e la tipologia dei due parametri.

/* 
c'è la possibilità di metetre un parametro opzionale ma non si dovra fare come dei parametri normali perchè altrimenti ci darà errore si può ovviare a questo errore mettendo un ? dopo il parametro così da dire che se esiste il valore di inserirlo se non devesse esserci allora di ometterlo 
*/

// es.

let sumIron2 : (a: number, b: number, c?:number) => number;

sumIron2 = (first: number , second: number) => {
    return first + second
}

sumIron2(2, 2)

sumIron2(2, 2, 2)

/*
la parola void serve a capire se la funzione riporterà qualcosa se vediamo questa parola significa che la variabile non riporterà nulla
*/

// es.

let hi = () => {
    console.log('hi');
    
}

/*
interface serve per semplificare la costruzione di oggetti inizializzando le proprietà con anche la loro tipologia di dato per essere usata in un oggetto rispettando quelle regole con una sola parola.
esiste anche class che serve per la programmazione ad oggetti usando la parola implements si possono usare le regole inizializzate nell'interface. esise il metodo greet che farà tornare un valore che può essere dinamico all'interno del costruttore 
*/

// es.

interface objPerson {
    name : string;
    age : number;
}

let personObj : objPerson;

personObj= {
    name: 'andrea',
    age : 19
}

class Person implements objPerson{
    name: string;
    age: number;

    constructor(n: string , a:number){
        this.name = n;
        this.age = a;
    }

    greet(){
        return `name is ${this.name} and i am ${this.age}`
    }
}

class Person2 implements objPerson{

    constructor(public name: string ,public age:number, private sex?: boolean){}

    greet(){
        return `name is ${this.name} and i am ${this.age}`
    }
}

let jonh = new Person('andrea', 18)

console.log(jonh.greet());

// public o private servono per nascondere o far vedere determinati valori bisogna però ricordare che va seguita tutta la struttura che ci portiamo da implements

/* 
il Generic serve come placeolder per migliorare la logica e la lettura del codice, permette di dare una variabile in una determinata variabile o funzione e ci permette di passare il dato
*/ 

// es.

function doNumber<T>(a: T){
    return a
}

doNumber<number | string>(3)

interface objAnimal<C> {
    id: number;
    name: string;
    data: C
}

let anAnimal : objAnimal<number> = {
    id : 9384,
    name: 'tigre',
    data: 4
}

// in questo caso abbiamo ato un generic chiamato T che durante lo svolgimento della funzione dirà che a dovra essere o un numero o una stringa grazie al contenuto delle parentesi angolari così succede anche nell'interface

