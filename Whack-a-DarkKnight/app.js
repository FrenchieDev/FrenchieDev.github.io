// Variables & stuff
const startButton = document.querySelector("#start");
const cell = document.querySelectorAll(".cell");
const darkKnight = document.querySelectorAll(".darkKnight");
let score = document.querySelector("#score");
let result = 0;

let audio = document.getElementById("audio");
let currentGame = false;

//Starting the game
startButton.addEventListener("click", startGame);
function startGame() {
  let timeLeft = document.querySelector("#timeLeft");
  let currentTime = timeLeft.textContent;
  if (currentGame === false) {
    // Music
    audio.play();

    // Speed of movement of the DarkKnight
    function speedDarkKnight() {
      timeId = setInterval(randomcell, 1000);
    }

    // Delete current DarkKnight & Select the new cell.
    function randomcell() {
      cell.forEach((className) => {
        className.classList.remove("darkKnight");
      });
      let randomPosition = cell[Math.floor(Math.random() * 12)];
      randomPosition.classList.add("darkKnight");
      hitPosition = randomPosition.id;
    }

    // Event of "clicking" on the DarkKnight + add score
    cell.forEach((id) => {
      id.addEventListener("mousedown", () => {
        if (id.id === hitPosition) {
          result = result + 1;
          score.textContent = result;
        }
      });
    });

    // End of the game
    function gameOver() {
      currentTime--;
      timeLeft.textContent = currentTime;
      if (currentTime == 0) {
        clearInterval(timerId);
        clearInterval(timeId);
        alert("GAME OVER! Your score is " + result);
        audio.pause();
        currentGame = false;
        timeLeft.textContent = 60;
        score.textContent = 0;
      }
    }
    let timerId = setInterval(gameOver, 1000);
    speedDarkKnight();

    currentGame = true;
  } else {
  }
}
