console.log('ok JS');

let num = prompt('Inserisci il').split('');
let somma = 0;
console.log(num);

for (let i = 0; i < num.length; i++) {

    somma += parseInt(num[i]);
}

console.log(somma);
