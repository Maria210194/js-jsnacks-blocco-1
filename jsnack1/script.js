// The Great Gatsby party !
// chiedi all'utente il suo nome e
// comunicagli se può partecipare alla festa

const guests = ['Scott Fitzgerald', 'Leonardo DiCaprio', 'Daisy Fay', 'Nick Carraway', 'Mary Stachie'];
let guestName = prompt('Inserisci il tuo nome');
let verification = false;

for (let i = 0; i < guests.length; i++) {

    if (guestName === guests[i]) {
        verification = true;
        console.log('Benvenuto!');
        //  document.getElementById('response').innerText = 'Benvenuto!';
    }
}

if (verification === false) {
    console.log('Sorry, no!');
    // document.getElementById('response').innerText = 'Sorry, no!';
}

