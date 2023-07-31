class utente {
    constructor(_firstNane, _lastName, _age, _location){
        this.firstName = _firstNane,
        this.lastName = _lastName,
        this.age = _age,
        this.location = _location
    };
    compare(user2) {
        if(this.age > user2){
            console.log('l\'utente ' + this.firstName + 'è più grande di ' + user2.firstName);
        }else{
            console.log('l\'utente ' + this.firstName + 'è più piccolo di ' + user2.firstName);
        };
    };
};
let array1 = [];
const p1 = new utente ('Mario', 'Rosi', 18, 'Rieti');
const p2 = new utente ('Alesandro', 'Rossi', 53, 'Empoli');
const p3 = new utente ('Luca', 'Bianchi', 21, 'Roma');
const p4 = new utente ('Emanuele', 'Tasso', 35, 'Torino');
const p5 = new utente ('Filippo', 'Bianchi', 43, 'Cagliari');

array1.push(p1,p2,p3,p4,p5);


console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p1.compare(p5));
console.log(p3.compare(p2));
console.log(p5.compare(p4));

console.log(array1);