console.log('JS OK!');

/*
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
la griglia è composta da 100 elementi che visualizzano i numeri da 1 e 100 in ordine.


Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


BONUS:
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/


// step by step
// 1. recupero la griglia con l'id
// 2. creo N (49, 81 o 100) div all'interno della griglia
//      2a: creo l'elemento
//      2b: aggiungo eventuali classi css per dargli uno stile
//      2c: associamo il numero da 1 a N al testo contenuto nella cella
//      2d: aggiungo l'elemento creato alla griglia
//      2e: aggiungo un listener sul click dell'elemento
//          2e-pt1: se non ha già lo sfondo azzurro lo metto
//          2e-pt2: se è già azzuro tolgo il colore dallo sfondo


// BONUS
// 1. recupero gli elementi bottone
// 2. aggiungo il listener al click ad ogni bottone
    // al click chiamo una funzione che genera la griglia (vedi sopra)
    // con 49, 81 o 100 celle in base al bottone cliccato.



