"use strict";

const parola = prompt('Inserisci una parola: ');

function checkPali(parola) {

    const lunghezza = parola.length;

    for (let i = 0; i < lunghezza / 2; i++) {

        if (parola[i] !== parola[lunghezza - 1 - i]) {
            return alert('Non palindroma');
        }
    }
    return alert ('Palindroma');
}



const index = checkPali(parola);



