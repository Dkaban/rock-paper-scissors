var choices = ["Rock", "Paper", "Scissors"];

function computerPlay()
{
    document.write("Computers Choice is: " + choices[Math.floor(Math.random() * choices.length)]);
    //return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection)
{

}

function compare(playerChoice, computerChoice)
{
    playerChoice = choices.indexOf(playerChoice);
    computerChoice = choices.indexOf(computerChoice);

    if(playerChoice == computerChoice)
    {
        return "Tie";
    }
    else if(playerChoice == choices.length -1 && computerChoice == 0)
    {
        return "Computer Wins";
    }
    else if(computerChoice == choices.length -1 && playerChoice == 0)
    {
        return "Player Wins";
    }
    else if(playerChoice > computerChoice)
    {
        return "Player Wins";
    }
    else
    {
        return "Computer Wins";
    }
}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection,computerSelection));