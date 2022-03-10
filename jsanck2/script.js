// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

let collezioneNumeri = [];

for (let i = 0; i < 6; i++) {
    console.log(i);

    const numero = parseInt(prompt('Inserisci un numero'));

    if (numero % 2 !== 0) {
        collezioneNumeri.push(numero);
    }

    console.log(collezioneNumeri);
}