var choices = ["Rock", "Paper", "Scissors"];

var result;

function displayResult()
{
    document.getElementById("Result").innerHTML = result;
}

function makeChoice(playerChoice)
{
    result = compareChoices(playerChoice, choices[Math.floor(Math.random() * choices.length)]);
    displayResult();
}

function compareChoices(playerChoice, computerChoice)
{
    var yourChoice = playerChoice;
    var compChoice = computerChoice;
    playerChoice = choices.indexOf(playerChoice);
    computerChoice = choices.indexOf(computerChoice);

    if(playerChoice == computerChoice)
    {
        return "TIE! You and the computer both chose " + yourChoice + ".";
    }
    else if(playerChoice == choices.length -1 && computerChoice == 0)
    {
        return "COMPUTER WINS!  You chose " + yourChoice + " and the computer chose " + compChoice + ".";
    }
    else if(computerChoice == choices.length -1 && playerChoice == 0)
    {
        return "YOU WIN!  You chose " + yourChoice + " and the computer chose " + compChoice + ".";
    }
    else if(playerChoice > computerChoice)
    {
        return "YOU WIN!  You chose " + yourChoice + " and the computer chose " + compChoice + ".";
    }
    else
    {
        return "COMPUTER WINS!  You chose " + yourChoice + " and the computer chose " + compChoice + ".";
    }
}