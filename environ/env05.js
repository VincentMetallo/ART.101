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


// LAB 5

$("#ghost-button").click(function(){
    console.log("the ghost button is click");
    $("#ghost").append("<img src='ghost.png'>");
});



// night = !night;
$("#Time").click(function(){
    
console.log("the time button is click");
$("#Time").toggleClass("night");
document.body.style.backgroundImage = "url('night.jpg')";
element.style.backgroundSize = "cover";
element.style.backgroundPosition = "center";
element.style.backgroundRepeat = "no-repeat";
element.style.minHeight = "100vh";
element.style.width = "100vw";
});

 if ("night" === true) {
    console.log("the ghost button is click");
    $("#ghost-button").hover(function(){
        $("#ghost").stop(true, true).slideDown(300);
        console.log("the ghost button is click");
        $("#ghost").append("<img src='ghost.png'>");
     },
     function(){
        $("#ghost").stop(true, true).slideUp(300);
        console.log("the ghost button is click");
     $("#ghost").append("<img src='ghost.png'>");
    }
 }