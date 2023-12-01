import { useState } from 'react';
import './App.css';

function RPSGame() {
  const [roundNo, setRoundno] = useState(0);
  const [playerScore, setPlayerscore] = useState(0);
  const [computerScore, setComputerscore] = useState(0);
  const [tiescore, setTiescore] = useState(0);
  const [comCho, setComcho] = useState("Loading..");
  const [report, setReport] = useState("Start the Game!");
  const [winner, setWinner] = useState("Loading...");
  const [counter, setCounter] = useState(0);

  function Newgame() {
    setRoundno(0);
    setPlayerscore(0);
    setComputerscore(0);
    setTiescore(0);
    setComcho("Loading..");
    setReport("Start the Game!");
    setWinner("Loading...");
    setCounter(0);
  }

  function getComputerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
  }

  function playRound(PlayerChoice, computerSelection) {
    if (PlayerChoice === computerSelection) {
      setTiescore((prevTiescore) => prevTiescore + 1);
      setReport(`Tie! ${PlayerChoice} and ${computerSelection} are the same`);
    } else if (
      (PlayerChoice === "Rock" && computerSelection === "Scissor") ||
      (PlayerChoice === "Paper" && computerSelection === "Rock") ||
      (PlayerChoice === "Scissor" && computerSelection === "Paper")
    ) {
      setPlayerscore((prevPlayerScore) => prevPlayerScore + 1);
      setReport(`You Won! ${PlayerChoice} beats ${computerSelection}`);
    } else if (
      (PlayerChoice === "Scissor" && computerSelection === "Rock") ||
      (PlayerChoice === "Paper" && computerSelection === "Scissor") ||
      (PlayerChoice === "Rock" && computerSelection === "Paper")
    ) {
      setComputerscore((prevComputerScore) => prevComputerScore + 1);
      setReport(`Computer Won! ${computerSelection} beats ${PlayerChoice}`);
    }
  }

  function game(PlayerChoice) {
    setRoundno(roundNo + 1);
    console.log(roundNo);
    setCounter(counter + 1);

    if (counter > 4) {
      Newgame();
    } else {
      const computerSelection = getComputerChoice();
      setComcho(computerSelection);
      playRound(PlayerChoice, computerSelection);
      console.log(roundNo);
      if(roundNo === 4){
          if(playerScore === computerScore){
            setWinner("Match Draw...");
          }
          else if(playerScore>computerScore){
            setWinner("Player");
          }
          else if(playerScore<computerScore){
            setWinner("Computer");
          }
      }
    }
  }
  

  return (
    <div>
      <h1 className='Title'>ROCK PAPER SCISSOR By <a href='https://github.com/Akilraj-1153'>AKIL</a></h1>
      <div className='playerip'>
        <h2>CHOOSE YOUR TOOL</h2>
        <div className='inputbutton'>
          <button onClick={() => game("Rock")}>ROCK</button>
          <button onClick={() => game("Paper")}>PAPER</button>
          <button onClick={() => game("Scissor")}>SCISSOR</button>
        </div>
      </div>
      <div>
        <h2>COMPUTER CHOOSING</h2>
        <button className='comchoose'>{comCho}</button>
      </div>
      <div className='Reportbox'>
        <div className='report'>
        <h2>Round:<span >{roundNo}</span></h2>
          <h2><span className='reportstatus'>{report}</span></h2>
        </div>
        <div className='scorecard'>
          <h2 >Player <span id="playerScore">{playerScore}</span></h2>
          <h2 >Computer  <span id="computerScore">{computerScore}</span></h2>
          <h2 >Tie  <span id="tieScore">{tiescore}</span></h2>
        </div>
      </div>

      <div className='result'>
        <h2 className='resultbox'>Winner of the match is <span id="resultinfo">{winner}</span></h2>
        <div>
          <button onClick={Newgame}>Start New Game</button>
        </div>
      </div>
    </div>
  );
}

export default RPSGame;
