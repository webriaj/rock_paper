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
    if(userInput == computerInput){
        result.innerText = `The match is Draw`;
        //alert('The match is Draw');
    }
    else if (userInput ==="ROCK" && computerInput === "SCISSOR" || userInput === "PAPER" && computerInput ==="ROCK" || userInput ==="SCISSOR" && computerInput === "PAPER") {
        result.innerText = `Congratulations ! You win the Match`;
       // alert('Congratulations ! You win the Match');
    }else{
        result.innerText = `Opps ! You loss the game. try again`;
       // alert('Opps ! You loss the game. try again')
    }

}
function currency() {
    let usd = document.getElementById("usd").value;
    usd = parseFloat(usd);
    let bdt = document.getElementById("bdt");
    
    result = usd*83;
    bdt.innerText = result;
}
function temperature() {
    let fheit = document.getElementById("Farenheit").value;
    fheit = parseFloat(fheit);
    let celius = document.getElementById("celcius");
    resultCelcius = (fheit-32)*(5/9);
    resultCelcius = resultCelcius.toFixed(3);
    celius.innerText = resultCelcius;
}
function clr() {
    document.getElementById("userInput").value = ' ';
    document.getElementById("usd").value = " ";
    document.getElementById("Farenheit").value = ' ';
}

function bgChange(){
    let code = Math.floor(Math.random()*16777251).toString(16);
    console.log(code);
    code = `#${code}`
    document.body.style.backgroundColor = code;
    document.getElementById('colorCode').innerText = `Background color code is ${code}`;
   
}

