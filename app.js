
// grab the tongue element

let tongue = document.querySelector('#tongue-container');


// can the tongue go to the gem when you click on it? WORK ON THIS


        // function that gets the position WORK ON THIS

        function getOffset(el) {
            const rect = el.getBoundingClientRect();
            return {
              left: rect.left + window.scrollX,
              top: rect.top + window.scrollY
            };
          }

          // function that gets the position of the mouse

          function printMousePos(event) {
            console.log(`x is ${event.clientX} and y is ${event.clientY}`);
            
          }
          
          document.addEventListener("click", printMousePos);



// gems

          
let pinkGem = document.querySelector('#pinkgem-container');

let blueGem = document.querySelector('#bluegem-container');

let yellowGem = document.querySelector('#yellowgem-container');

let blackGem = document.querySelector('#blackgem-container');

let blackGem2 = document.querySelector('#blackgem2-container');


// random number for position of gems 


function randomNum(){
    let pinkRandom = Math.floor(Math.random() * 90);

    // change the pink gem's position randomly 

    
    pinkGem.style.left = pinkRandom + "%";

    

        // change the blue gem's position randomly 

    let blueRandom = Math.floor(Math.random() * 90);

        blueGem.style.left = blueRandom + "%";

        // change the yellow gem's position randomly 

        let yellowRandom = Math.floor(Math.random() * 90);

        yellowGem.style.left = yellowRandom + "%";


        // change the dark gem's position randomly 

        let blackRandom = Math.floor(Math.random() * 90);

        blackGem.style.left = blackRandom + "%";

          // change the second dark gem's position randomly 

          let blackRandom2 = Math.floor(Math.random() * 90);

          blackGem.style.left = blackRandom2 + "%";
      }

// position gems randomly 

function randomPosition(){
//  setInterval(randomNum, 500);
 // setInterval(randomNum, 1000);
    setInterval(randomNum, 3000);
    
}


// grab different chameleons 

let genericChameleon = document.querySelector('#chameleon-container');

let pinkChameleon = document.querySelector('#pink-chameleon-container');

let yellowChameleon = document.querySelector('#yellow-chameleon-container');

let blueChameleon = document.querySelector('#blue-chameleon-container');

let blackChameleon = document.querySelector('#black-chameleon-container');


// score count 

let scoreCountSpan = document.querySelector('#score-board-counter');

let points = 0;

// event listeners for when you click on a gem

pinkGem.addEventListener('click', () =>{
  points++;
  scoreCountSpan.innerHTML = points;
  pinkChameleon.style.display = "block";
  genericChameleon.style.display = "none";
  blueChameleon.style.display = "none";
  yellowChameleon.style.display = "none";
  blackChameleon.style.display = "none";
})

yellowGem.addEventListener('click', () =>{
  points++;
  scoreCountSpan.innerHTML = points;
  yellowChameleon.style.display = "block";
  genericChameleon.style.display = "none";
  blueChameleon.style.display = "none";
  pinkChameleon.style.display = "none";
  blackChameleon.style.display = "none";
})

blueGem.addEventListener('click', () =>{
  points++;
  scoreCountSpan.innerHTML = points;
  blueChameleon.style.display = "block";
  genericChameleon.style.display = "none";
  yellowChameleon.style.display = "none";
  pinkChameleon.style.display = "none";
  blackChameleon.style.display = "none";
})

blackGem.addEventListener('click', () =>{
  blackChameleon.style.display = "block";
  genericChameleon.style.display = "none";
  yellowChameleon.style.display = "none";
  pinkChameleon.style.display = "none";
  blueChameleon.style.display = "none";
  livesLeft--;
  
  if (livesLeft == 2){
    livesPic.style.backgroundImage = 'url("./assets/lives/2-lives.svg")';
  } else if (livesLeft == 1){
    livesPic.style.backgroundImage = 'url("./assets/lives/1-live.svg")';
  } else if (livesLeft == 0){
    livesPic.style.backgroundImage = 'url("./assets/lives/dead.svg")';
    gameOver();
  }

})

blackGem2.addEventListener('click', () =>{
  blackChameleon.style.display = "block";
  genericChameleon.style.display = "none";
  yellowChameleon.style.display = "none";
  pinkChameleon.style.display = "none";
  blueChameleon.style.display = "none";
  livesLeft--;

  if (livesLeft == 2){
    livesPic.style.backgroundImage = 'url("./assets/lives/2-lives.svg")';
  } else if (livesLeft == 1){
    livesPic.style.backgroundImage = 'url("./assets/lives/1-live.svg")';
  } else if (livesLeft == 0){
    livesPic.style.backgroundImage = 'url("./assets/lives/dead.svg")';
    gameOver();
  }
})

// grab health board

let livesLeft = 3;

let livesPic = document.querySelector('#health-board');



// game background 

let gameBackground = document.querySelector('#game-background');


// play and rules btns 

let playBtn = document.querySelector('#play-btn-container');
let rulesBtn = document.querySelector('#rules-btn-container');

let instructions = document.querySelector('#instructions');

let titleScreen = document.querySelector('#title-screen');

let backBtn = document.querySelector("#back-btn-container");

// event listener for the rules

rulesBtn.addEventListener('click', () =>{
playBtn.style.display = "none";
rulesBtn.style.display = "none";
titleScreen.style.display = "none";
instructions.style.display = "block";
backBtn.style.display = "block";
})

// event listener for the back btn 

backBtn.addEventListener('click', () =>{

    playBtn.style.display = "block";
    rulesBtn.style.display = "block";
    titleScreen.style.display = "block";
    instructions.style.display = "none";
    backBtn.style.display = "none";
})

// timer 

let timeSpan = document.querySelector('#time-board-counter');

let gameDuration = 30;

// did i win function 

function didIWin(){
  if (points == 5){
    youWin();
  }
}

function myTimer(){

  if (gameDuration >= 0 && points !== 5 && livesLeft !== 0){
    setTimeout(printTime, 1000);
    
  } else if (gameDuration >= 0 && points == 5 && livesLeft !== 0){
    didIWin();
  }
  else{
    gameOver();
  }
}

function printTime(){
  timeSpan.innerHTML = gameDuration;
  gameDuration--;
  myTimer();
}


// event listener for the play btn

playBtn.addEventListener('click', () =>{

  playBtn.style.display = "none";
  rulesBtn.style.display = "none";
  titleScreen.style.display = "none";
  instructions.style.display = "none";
  backBtn.style.display = "none";
  startGame();
})


const startGame = () =>{
  myTimer();
  genericChameleon.style.display = "block";
  gameBackground.style.display = "block";
  pinkGem.classList.add('fallingDown');
  yellowGem.classList.add('fallingDown');
  blueGem.classList.add('fallingDown');
  blackGem.classList.add('fallingDown');
  blackGem2.classList.add('fallingDown');
  randomPosition();

}

// try again btn 

let gameOverScreen = document.querySelector('#game-over');

let tryAgainBtn = document.querySelector('#try-again-btn');

function gameOver(){
  if (gameDuration < 1){
    
    // game over if you run out of time

        // display none to everything

    blackChameleon.style.display = "none";
    genericChameleon.style.display = "none";
    yellowChameleon.style.display = "none";
    pinkChameleon.style.display = "none";
    blueChameleon.style.display = "none";

    gameBackground.style.display = "none";

        // remove effect of falling down for gems

    pinkGem.classList.remove('fallingDown');
    yellowGem.classList.remove('fallingDown');
    blueGem.classList.remove('fallingDown');
    blackGem.classList.remove('fallingDown');
    blackGem2.classList.remove('fallingDown');   

   
        // display game over screen for lack of time

      gameOverScreen.style.backgroundImage = 'url("./assets/gameOver/lackOfTime/game-over-time.svg")';

      gameOverScreen.style.display = "block";
      tryAgainBtn.style.display = "block";

  } else if (livesLeft == 0){

    // game over if you click on 3 black gems

        // display none to everything

        blackChameleon.style.display = "none";
        genericChameleon.style.display = "none";
        yellowChameleon.style.display = "none";
        pinkChameleon.style.display = "none";
        blueChameleon.style.display = "none";
    
        gameBackground.style.display = "none";

    pinkGem.classList.remove('fallingDown');
    yellowGem.classList.remove('fallingDown');
    blueGem.classList.remove('fallingDown');
    blackGem.classList.remove('fallingDown');
    blackGem2.classList.remove('fallingDown');   

        // display game over screen for lack of lives

        gameOverScreen.style.backgroundImage = 'url("./assets/gameOver/blackGems/gameOver.svg")';
        tryAgainBtn.style.display = "block";
      
  }
}

tryAgainBtn.addEventListener('click', () => {

  // reset score board
  points = 0;
  scoreCountSpan.innerHTML = points;

  //reset game duration 
  gameDuration = 30;
  timeSpan.innerHTML = gameDuration;

  // reset lives both in points and in images
  livesLeft = 3;
  livesPic.style.backgroundImage = 'url("./assets/lives/3-lives.svg")';

  startGame();

  // display none to game over titles
  gameOverScreen.style.display = "none";
  tryAgainBtn.style.display = "none";


})

// winning 

let levelComplete = document.querySelector('#level-complete');

let playAgainBtn = document.querySelector('#play-again-btn');

function youWin(){

  levelComplete.style.display = "block"
  playAgainBtn.style.display = "block";


    blackChameleon.style.display = "none";
    genericChameleon.style.display = "none";
    yellowChameleon.style.display = "none";
    pinkChameleon.style.display = "none";
    blueChameleon.style.display = "none";

    pinkGem.classList.remove('fallingDown');
    yellowGem.classList.remove('fallingDown');
    blueGem.classList.remove('fallingDown');
    blackGem.classList.remove('fallingDown');
    blackGem2.classList.remove('fallingDown');   

    gameBackground.style.display = "none";

}

playAgainBtn.addEventListener('click', () => {

  // reset score board 
  points = 0;
  scoreCountSpan.innerHTML = points;

  // reset time board
  gameDuration = 30;
  timeSpan.innerHTML = gameDuration;

  // reset lives 

  livesLeft = 3;
  livesPic.style.backgroundImage = 'url("./assets/lives/3-lives.svg")';

  // display none to "you win" titles 

  levelComplete.style.display = "none";
  playAgainBtn.style.display = "none";

  startGame();
})
