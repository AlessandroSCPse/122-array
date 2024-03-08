// dato un array di numeri interi, stampare solo i numeri dispari
const numbers = [5, 78, 44, 99, 23, 8];

// Scorrere l'array
for(let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    // Per ogni elemento:
    // controllo se è dispari
    // se è dispari lo stampo
    if(thisNumber % 2 !== 0) {
        console.log(thisNumber);
    }
}
