function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a draw!";
    }
  
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;

    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = window.prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${round}:`);
      console.log(`Player: ${playerSelection}`);
      console.log(`Computer: ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    let winner;
    if (playerScore > computerScore) {
      winner = 'Player';
    } else if (playerScore < computerScore) {
      winner = 'Computer';
    } else {
      winner = 'It\'s a tie';
    }
  
    console.log(`Final Score: Player ${playerScore}, Computer ${computerScore}`);
    console.log(`Winner: ${winner}`);
  }
  game();
  