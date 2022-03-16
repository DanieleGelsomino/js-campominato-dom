// console check
console.log("JS OK!");

//************* FUNZIONI ************

function startGame(totCells, levels) {
  const positionBomb = bombGenerator(totCells);
  console.log(positionBomb);
  createElementsInGrid(totCells, levels);
}

function bombGenerator(max) {
  const bombList = [];
  while (bombList.length < 16) {
    const bombNumbers = generaNumeroRandom(1, max);
    //I numeri nella lista delle bombe non possono essere duplicati.
    if (!bombList.includes(bombNumbers)) {
      bombList.push(bombNumbers);
    }
  }
  return bombList;
}

function generaNumeroRandom(min, max) {
  const range = max - min + 1;
  const numGenerated = Math.floor(Math.random() * range) + min;
  return numGenerated;
}

function createElementsInGrid(totalCells, levelClass) {
  // recupero la griglia con l'id
  const grid = document.getElementById("grid");
  // resetto il contenuto della griglia
  grid.innerHTML = "";

  // creo totalCells div all'interno della griglia
  for (let i = 0; i < totalCells; i++) {
    // creo l'elemento
    const cell = document.createElement("div");
    cell.id = "cell-" + (i + i);
    // aggiungo eventuali classi css per dargli uno stile
    // cell.classList.add('cell');
    cell.className = "cell";
    cell.classList.add(levelClass);
    // associamo il numero da 1 a 100 al testo contenuto nella cella
    cell.innerText = i + 1;
    // aggiungo l'elemento creato alla griglia
    grid.appendChild(cell);
  }
}

//************* / FUNZIONI ************

// preparazione all'esecuzione del programma

const buttonEasy = document.getElementById("easy");

const buttonMedium = document.getElementById("medium");

const buttonHard = document.getElementById("hard");

// aggiungo eventi ai button

buttonEasy.addEventListener("click", () => startGame(100, "easy"));

buttonMedium.addEventListener("click", () => startGame(81, "medium"));

buttonHard.addEventListener("click", () => startGame(49, "hard"));
