let environmentTitle = "The Forest Room";

let environmentElements = ["trees", "dust", "wind", "dirt"];

let mainEntity = {
    name: "Logford",
    type: "soft border",
    mood: "curious",
    isMoving: true,
    favoriteElement: environmentElements[1]
};


let count = 0;
let buttonCreature = {
    name: "Logford's button",
    species: "log",
    favoriteFood: "unknown",
    moods: ["Hi, I'm Logford! ", "Welcome to the Forest Room, isn't it pretty? ", "still hunrgy", "joyful", "satisfied", "thankful", "full"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];


message = message + "<p>I'm feeling " + currentMood + ".</p>";







