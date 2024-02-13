const Strike = document.getElementById("strike")
 const reset = document.getElementById("reset")

 const IndiaScores = document.getElementById("score-ind")
 const IndiaWickets = document.getElementById("wickets-ind")

 const PakistanScores = document.getElementById("score-pak")
 const PakistanWickets = document.getElementById("wickets-pak")

 let Team1Scores = 0;
 let Team2Scores = 0;
 let Team1Wickets = 0;
 let Team2Wickets = 0;
 let Team = 1;
 let Team1BallsFaced = 0;
 let Team2BallsFaced = 0;

 const possibleOutcomes = [0,1,2,3,4,6,"W"];
 
 const gameOverAudio = new Audio ("http://bit.ly/so-crowd-cheer")
 const StrikeAudio = new Audio ("http://bit.ly/so-ball-hit")

 function gameOver() {
   gameOverAudio.play();
   switch (true) {
      case Team1Scores > Team2Scores:
        alert("IND wins");
        break;
      case Team2Scores > Team1Scores:
        alert("PAK wins");
        break;
      case Team2Scores == Team1Scores:
        alert("It is another superover!");
        break;
   }
 }
 
 function updateScore() {
  // console.log(Team1Scores)
  // console.log(Team2Scores)
   IndiaScores.textContent = Team1Scores;
   IndiaWickets.textContent = Team1Wickets;
   PakistanScores.textContent = Team2Scores;
   PakistanWickets.textContent = Team2Wickets;
 }
 
 reset.onclick = () => {
   window.location.reload();
 };
 
 Strike.onclick = () => {
   StrikeAudio.pause();
   StrikeAudio.currentTime = 0;
   StrikeAudio.play();
 
   const randomElement = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
   console.log(randomElement)
 
   
   if (Team === 2) {
     Team2BallsFaced++;
     document.querySelector(`#pak :nth-child(${Team2BallsFaced})`).textContent = randomElement;
     if (randomElement === "W") {
       Team2Wickets++;
       updateScore()
     }
     else {
       Team2Scores += randomElement;
       updateScore()
     }
     if (
       Team2BallsFaced === 6 ||
       Team2Wickets === 2 ||
       Team2Scores > Team1Scores
     ) {
       Team = 3;
       gameOver();
     }
   }
 
   if (Team === 1) {
     Team1BallsFaced++;
     document.querySelector(`#ind :nth-child(${Team1BallsFaced})`).innerHTML = randomElement;
     if (randomElement === "W") {
       Team1Wickets++;
       updateScore()
     } else {
       Team1Scores += randomElement;
       updateScore()
     }
     if (Team1BallsFaced === 6 || Team1Wickets === 2){Team = 2;}
   }
   updateScore();
 };
 
 
