let count = 0;
let faces=[":3",":p",":O",";D",";0",";3",";p",":|",":3c"]

$("#needy-button").click( function() {

   

   $("#needy-button").html("You clicked me " + count + " times" + " " + faces[count]);
-
-
-

   $("#needy-button").css("background-color", colors [count]);
-
-
-

   count = count + 1;
});
