"use strict";
//Primo mio try: non corretto 

/*
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


//Secondo try, dopo la correzione mattutina dell'esercizio 

function getRndInteger(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log('non viene eseguito');
}

function isEven(number){

    if(number % 2 === 0){
        return true;
    }

    return false;

}


function sumNumbers(num1, num2){
    return num1 + num2;
}



const userChoise = prompt('Scegli pari o dispari');
const userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
const cpuNumber = getRndInteger(1, 5);//funzione che genera un numero random da 1 a 5

const sum = sumNumbers(userNumber,cpuNumber);
const result = isEven(sum);

if((userChoise === 'pari' && result === true) || (userChoise === 'dispari' && result === false)){
    console.log('Utente vince');
} else {
    console.log('Utente perde');
}