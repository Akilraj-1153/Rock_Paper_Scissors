
import { useState } from 'react';
import './App.css';

function RPSGame({ }) {

 const[roundNo,setRoundno]=useState(0);
 const[playerScore,setPlayerscore]=useState(0);
 const[computerScore,setComputerscore]=useState(0);
 const[tiescore,setTiescore]=useState(0);

 const[comCho,setComcho]=useState("Loading..");
 const[report,setReport]=useState("Start the Game!");

  function Newgame(){
    window.location.reload(false);
  }

  function getComputerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
  }

  function playRound(PlayerChoice, computerSelection) {
    if (PlayerChoice === computerSelection) {
        tie+=1
        return "Tie";  
    } 
    else if (
        (PlayerChoice === "Rock" && computerSelection === "Scissor") ||
        (PlayerChoice === "Paper" && computerSelection === "Rock") ||
        (PlayerChoice === "Scissor" && computerSelection === "Paper")
        
    ) {
        player += 1;
        return "You Won! " + PlayerChoice + " beats " + computerSelection;
    } else if(
        (PlayerChoice === "Scissor" && computerSelection === "Rock") ||
        (PlayerChoice === "Paper" && computerSelection === "Scissor") ||
        (PlayerChoice === "Rock" && computerSelection === "Paper")
    ){
        computer += 1;
        return "You Lose! " + computerSelection + " beats " + PlayerChoice;
    }
}

function game(PlayerChoice) {
  if(roundNo<=Roundlimit){
  const computerSelection = getComputerChoice();
  var roundResult = playRound(PlayerChoice, computerSelection);
  console.log(roundResult);
  
  if(roundNo == Roundlimit || player == 3 || computer == 3){
      if (player >= 3 || player > computer) {
          
      } else if (computer >= 3 || player < computer) {
          
      } else {
          
      }
  }
  Roundno++;
  }
}

let Roundlimit=5;
let Roundno = 1;  
let tie=0;
let player = 0;
let computer = 0;

  return(
    <div>
        <h1 className='Title'>ROCK PAPER SCISSOR</h1>
        <div className='playerip'>
          <h2>CHOOSE YOUR TOOL</h2>
          <div className='inputbutton'>
            <button onClick={game("Rock")}>ROCK</button>
            <button onClick={game("Paper")}>PAPER</button>
            <button onClick={game("Scissor")}>SCISSOR</button>
          </div>
        </div>
        <div >
          <h2>COMPUTER CHOOSING</h2>
          <button className='comchoose'>{comCho}</button>
        </div>

        <div className='Reportbox'>
          <div className='report'>
              <h2>Round:<span >{roundNo}</span></h2>
              <h2><span>{report}</span></h2>
          </div>
          <div className='scorecard'>
            <h2 >Player <span id="playerScore">0 </span></h2>
            <h2 >Computer  <span id="computerScore">0</span></h2>
            <h2 >Tie  <span id="tieScore">0</span></h2>
          </div>
        </div>

        <div className='result'>
             <h2 className='resultbox'>Winner of the match is <span id="resultinfo">Loading...</span></h2>
          <div >
              <button onClick={Newgame}>Start New Game</button>
          </div>
        </div>
    </div>
    
  );
}

export default RPSGame;
