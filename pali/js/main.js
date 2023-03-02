"use strict";

const parola = prompt('Inserisci una parola: ');

function checkPali(parola) {

    const lunghezza = parola.length;

    for (let i = 0; i < lunghezza / 2; i++) {

        if (parola[i] !== parola[lunghezza - 1 - i]) {
            return ('Non palindroma');
        }
    }
    return ('Palindroma');
}


const index = checkPali(parola);

console.log(index)






