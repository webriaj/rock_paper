function game() {
    let userInput = document.getElementById("userInput").value.toUpperCase();
    let result = document.getElementById('result');
    document.getElementById("userValue").innerText = userInput;
    console.log(userInput);
    let randomValue = Math.random();
    var computerInput;
    if (randomValue < 0.33) {
        computerInput = "ROCK";
    }else if(randomValue < 0.66){
        computerInput = "PAPER"
    }else{
        computerInput = "SCISSOR";
    }
    document.getElementById("compInput").innerText = computerInput;
    if(userInput === computerInput){
        result.innerText = `The match is Draw`;
    }
    else if (userInput ==="ROCK" && computerInput === "SCISSOR" || userInput === "PAPER" && computerInput ==="ROCK" || userInput ==="SCISSOR" && computerInput === "ROCK") {
        result.innerText = `Congratulations ! You win the Match`;
    }else{
        result.innerText = `Opps ! You loss the game. try again`;
    }

}
function clr() {
    document.getElementById("userInput").value = ' ';
}