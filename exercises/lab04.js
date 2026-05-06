let count = 0;
let buttonCreature = {
    name: "Emotional button",
    species: "para-cyber rodent",
    favoriteFood: "your clicks",
    moods: ["lazy", "hungry", "still hunrgy", "joyful", "satisfied", "thankful", "full"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

   let message = "<p>You fed me " + count + " times.</p>";
   message=message + "<p>howdy</p>"
   message = message + "<p>People call me " + buttonCreature.name + ".</p>";
message = message + "<p>I'm technically a " + buttonCreature.species + ".</p>";
message = message + "<p>I'm feeling " + currentMood + ".</p>";


message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});