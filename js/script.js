// console check
console.log("JS OK!");

//************* FUNZIONI ************

function startGame(totCells, levels) {
  const positionBomb = bombGenerator(totCells);
  console.log(positionBomb);
  createElementsInGrid(totCells, levels);
  let click = 0;
  for (let i = 1; i <= totCells; i++) {
    const cell = document.getElementById("cell-" + i);
    // aggiungo evento al click
    cell.addEventListener("click", () => {
      console.log(i);
      // se il numero è presente nella lista abbiamo calpestato una bomba
      // e la cella si colorerà di rosso, altrimenti di blu.
      const bombDetected = positionBomb.includes(i);
      if (bombDetected) {
        let punteggio = 100 / (totCells - 16);
        let playerPunteggio = (punteggio * click).toFixed(2);
        console.log(playerPunteggio);
        punteggioUser.innerHTML = `<h3>il tuo record : ${playerPunteggio}</h3>`;
        cell.classList.add("bg-red");
        gameOver.classList.remove("d-none");
        gameOverText.classList.remove("d-none");
      } else {
        click += 1;
        console.log(click);
        let punteggio = 100 / (totCells - 16);
        let playerPunteggio = (punteggio * click).toFixed(2);
        if (playerPunteggio > 99) {
          winnerGame.classList.remove("d-none");
          winnerText.classList.remove("d-none");
        }
        console.log(playerPunteggio);
        punteggioUser.innerHTML = `<h3>il tuo record : ${playerPunteggio}</h3>`;
        cell.classList.add("bg-skyblue");
      }
    });
  }
}

function bombGenerator(max) {
  const bombList = [];
  while (bombList.length < 16) {
    const bombNumbers = generaNumeroRandom(1, max);
    //I numeri nella lista delle bombe non possono essere duplicati.
    if (bombList.includes(bombNumbers) == false) {
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
    cell.id = "cell-" + (i + 1);
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

const gameOver = document.getElementById("game-over");

const gameOverText = document.getElementById("game-over-text");

const winnerGame = document.getElementById("winner");

const winnerText = document.getElementById("winner-text");

const punteggioUser = document.getElementById("punteggio");

// aggiungo eventi ai button

buttonEasy.addEventListener("click", () => startGame(100, "easy"));

buttonMedium.addEventListener("click", () => startGame(81, "medium"));

buttonHard.addEventListener("click", () => startGame(49, "hard"));

// creo schermata game over
