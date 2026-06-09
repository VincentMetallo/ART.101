$("#main").click(function(){
  
console.log("main_screen clicked");
document.body.style.backgroundImage = 'url("main_screen.png")';
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
});

$("#progress").click(function(){
console.log("progress_screen clicked");
document.body.style.backgroundImage = 'url("in_progress.png")';
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
});

$("#result").click(function(){
console.log("result_screen clicked");
document.body.style.backgroundImage = 'url("results_screen.png")';
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
});

$("#Disappear").click(function(){
console.log("disappear clicked");
document.body.style.backgroundImage = 'url("main_screen.png")';
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------
$("#1").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#1").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#1").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

if (GeneratedNumber == 1) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


$("#2").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#2").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#2").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 2) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});

$("#3").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#3").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#3").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 3) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


$("#4").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#4").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#4").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 4) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


$("#5").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#5").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#5").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 5) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


$("#6").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#6").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#6").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 6) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});

   
$("#7").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#7").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#7").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 7) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


$("#8").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#8").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#8").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 8) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});

$("#9").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#9").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#9").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 9) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});

$("#10").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#10").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#10").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 10) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});


// --------------------------------------------------------------------------------------

$("#red").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#red").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#red").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

if (
    GeneratedNumber == 1 ||
    GeneratedNumber == 4 ||
    GeneratedNumber == 5 ||
    GeneratedNumber == 8 ||
    GeneratedNumber == 9
) {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});










$("#black").click(function ranNum() {
    // play progress screen
    $("#fullScreenOverlay").fadeIn(1); 

    // Hide it  after 2 seconds
    setTimeout(function() {
        $("#fullScreenOverlay").fadeOut(200);
    }, 9000);


});
$("#black").click(function ranNum() {
    var sound = new Audio('roulette-sound.mp3');
    sound.play();
});
$("#black").click(function ranNum() {

    // Random number generator
    var GeneratedNumber = Math.floor(Math.random() * 10) + 1;
    var conclusion
  console.log(GeneratedNumber)

 if (GeneratedNumber == 2 || GeneratedNumber == 3 || GeneratedNumber == 6 ||GeneratedNumber == 7 || GeneratedNumber == 10) 
    {
        console.log("you win")
          winMoney(20);
        message =  GeneratedNumber + ", You Win";
    }
    else {
       console.log("you lose")
         loseMoney(10);
       message = GeneratedNumber + ", You lose";
    }
    document.getElementById("result-message").innerHTML = message;
});
   

let balance =
    Number(localStorage.getItem("balance")) || 100;

function updateBalance() {

    document.getElementById("balanceDisplay")
        .textContent = balance;

    localStorage.setItem(
        "balance",
        balance
    );
}

function winMoney(amount) {
    balance += amount;
    updateBalance();
}

function loseMoney(amount) {
    balance -= amount;

    if (balance < 0) {
        balance = 0;
    }

    updateBalance();

    if (balance === 0) {
        gameOver();
    }
}

function gameOver() {
    document.getElementById("result-message").innerHTML =
        "GAME OVER - You're out of money!";

    $("button").prop("disabled", true);
}

updateBalance();
let currentBalance = 10050; 

function deposit(amount) {
  currentBalance += amount;
}

function withdraw(amount) {
  if (amount <= currentBalance) {
    currentBalance -= amount;
  } else {
    console.log("Insufficient funds!");
  }
}

function gameOver() {

    document.getElementById("result-message").innerHTML =
        "GAME OVER - You ran out of money!";

    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10,#red,#black")
        .prop("disabled", true);

    $("#restartButton").show();

}

function loseMoney(amount) {

    balance -= amount;

    if (balance < 0) {
        balance = 0;
    }

    updateBalance();

    if (balance <= 0) {
        gameOver();
    }

}

function restartGame() {

    balance = 100;

    updateBalance();

    document.getElementById("result-message").innerHTML =
        "";

    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10,#red,#black")
        .prop("disabled", false);

    $("#restartButton").hide();

}

$("#restartButton").click(function () {
    restartGame();
});

