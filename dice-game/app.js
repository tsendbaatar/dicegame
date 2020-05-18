var diceDom = document.querySelector(".dice");
// Toglogchiin eeljiig hadgalah huvisagch 1 toglogch 0, 2 toglogch 1
var activePlayer;

//Toglogchdiin tsugluulsan onoog tsugluulah huvisagch
var scores;

//Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore;

var isGameOver;
//Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 utgiig ene huvisagchid sanamsargui uusgeh
initGame();

function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  //var dice1 = Math.floor(Math.random() * 6) + 1;
  //<div class="player-score" id="score-0">43</div>
  document.querySelector(".player-0-panel").classList.add("active");
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  diceDom.style.display = "none";

  document.querySelector(".btn-roll").addEventListener("click", shooshid);
  //console.log("Shoo :" + dice);
}

document.querySelector(".btn-new").addEventListener("click", initGame);

function shooshid() {
  if (isGameOver !== true) {
    //sanamsargui toog gargah
    var dice = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    //buusan shoonii toog zurag deer gargah
    diceDom.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      roundScore = roundScore + dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextplayer();
    }
  } else {
    alert("Game finish. Start new game");

    isGameOver = false;
  }
}
//Hold tovch
document.querySelector(".btn-hold").addEventListener("click", function () {
  //Tuhain toglogchiin tsugluulsan ognoog undsen onoond nemne
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //score - 0;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    isGameOver = true;
    document.getElementById("name-" + activePlayer).textContent = "Winner !!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    nextplayer();
  }
});

function nextplayer() {
  //eeljiin onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //idvehite toglogch ni 0 bval 1 ugui bol 0 bolgono
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog tur alga bolgoh
  diceDom.style.display = "none";
}
