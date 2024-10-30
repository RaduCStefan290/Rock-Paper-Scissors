function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber < 1 / 3) {
            return "rock";
        } else if (randomNumber < 2 / 3) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}
console.log (playGame());