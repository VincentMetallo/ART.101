function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Noooooope");
    }
}

$("#good-button").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 20) + 1;
    var conclusion
    //
    
    if (GeneratedNumber <= 10) {
  console.log(GeneratedNumber)
}
    askNumber(GeneratedNumber);
});