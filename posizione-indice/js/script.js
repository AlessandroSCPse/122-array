// Chiediamo un numero all'utente e stampiamo 
// l'elemento che si trova nella posizione indicata 
// dall'utente all'interno dell'array. 
const namesList = ['Alessandro', 'Michele', 'Fabio', 'Maria'];

// Chiediamo il numero all'utente
const userNumber = parseInt(prompt('Dimmi un numero'));
// Stampo in pagina l'elemento dall'indice
const element = namesList[userNumber - 1];
console.log(element);
