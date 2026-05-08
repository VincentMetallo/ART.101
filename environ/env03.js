let environmentTitle = "The Forest Room";

let environmentElements = ["trees", "dust", "wind", "dirt"];

let mainEntity = {
    name: "Logford",
    type: "soft border",
    isMoving: true,
    favoriteElement: environmentElements[1]
};


let count = 0;
let buttonCreature = {
    name: "Logford's button",
    species: "log",
    favoriteFood: "unknown",
    moods: ["Hi, I'm Logford! ", "Welcome to the Forest Page, isn't it pretty? ", "How are you doing today?", "Isn't this weather wonderfull?", "This is my favorite page", "Nice to meet you I'm Logford", "Whats your name?"]
};

$("#logford-button").click(function(){

    count = count + 1;
console.log("the button is click");
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];



//buttonCreature.moods = buttonCreature.moods + currentMood ;
$("#logford-button").html(currentMood) ;

});