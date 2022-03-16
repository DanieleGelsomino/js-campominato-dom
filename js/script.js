// console check
console.log("JS OK!");

// preparazione all'esecuzione del programma

const buttonEasy = document.getElementById("easy");

const buttonMedium = document.getElementById("medium");

const buttonHard = document.getElementById("hard");

buttonEasy.addEventListener("click", () => createElementsInGrid(100, "easy"));

buttonMedium.addEventListener("click", () =>
  createElementsInGrid(81, "medium")
);

buttonHard.addEventListener("click", () => createElementsInGrid(49, "hard"));

function createElementsInGrid(totalCells, levelClass) {
  // recupero la griglia con l'id
  const grid = document.getElementById("grid");
  // resetto il contenuto della griglia
  grid.innerHTML = "";

  // creo totalCells div all'interno della griglia
  for (let i = 0; i < totalCells; i++) {
    // creo l'elemento
    const cell = document.createElement("div");
    // aggiungo eventuali classi css per dargli uno stile
    // cell.classList.add('cell');
    cell.className = "cell";
    cell.classList.add(levelClass);
    // associamo il numero da 1 a 100 al testo contenuto nella cella
    cell.innerText = i + 1;
    // aggiungo l'elemento creato alla griglia
    grid.appendChild(cell);

    // aggiungo un listener sul click dell'elemento
    // se non ha già lo sfondo azzurro lo metto
    // se è già azzuro tolgo il colore dallo sfondo

    cell.addEventListener("click", () => cell.classList.toggle("bg-skyblue"));
  }
}
