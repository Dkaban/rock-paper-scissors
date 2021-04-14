function computerPlay()
{
    return "scissors";
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock" && computerSelection == "paper")
    {
        //Computer wins
        console.log("Computer Wins!");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        //Computer wins
        console.log("Computer Wins!");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        //Computer wins
        console.log("Computer Wins!");
    }
    else
    {
        //Player wins
        console.log("Player Wins!");
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));