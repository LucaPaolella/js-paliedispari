"use strict";

const userChoice = prompt ("Ciao! Benvenuto nel simulatore di pari e dispari. Pari o Dispari?", "" );
console.log(userChoice);
const pcChoice = Math.floor(Math.random() * 5) + 1;
console.log(pcChoice);




if (userChoice == "Pari" || userChoice == "pari"){
    let userNum = Number(prompt("Inserisci un numero che va da 1 a 5", " "));

    if (userNum > 5) {
        alert("Non hai inserito un valore corretto. Ricarica la pagina per giocare di nuovo");
    }

    else {
        function sommaNumeri (){
            const somma = userNum + pcChoice;
            console.log(somma)
            if (somma % 2 == 0) {
                alert("You win!");
            }
            else {
                alert("PC win!");
            }
            return somma;
        }
        sommaNumeri();
    }
    
}

else if (userChoice == "Dispari" || userChoice == "dispari"){
    let userNum = Number(prompt("Inserisci un numero che va da 1 a 5", " "));

    if (userNum > 5) {
        alert("Non hai inserito un valore corretto. Ricarica la pagina per giocare di nuovo");
    }

    else {
        function sommaNumeri (){
            const somma = userNum + pcChoice;
            console.log(somma)
            if (somma % 2 == 0) {
                alert("PC win!");
            }
            else {
                alert("You win!");
            }
            return somma;
        }
        sommaNumeri();
    }
}

else {
    alert("Non hai inserito un valore corretto. Ricarica la pagina per giocare di nuovo")
}

/*let userNum = Number(prompt("Inserisci un numero che va da 1 a 5", " "));*/

 





/*
if(num % 2 == 0) {
    alert("You win!");
}
else {
    alert("PC win!");
}
*/