// This creates the random number at loading of document. 
$(document).ready (function() {

  var random = Math.floor(Math.random() * 101) + 19;

  console.log(random);

  $(".random-number").text(random);

 });

 var counter=0

// Random numbers assigned to images. 
$(document).ready (function() {

    var random = Math.floor(Math.random() * 12) +1;

    console.log(random);

    $("#red").text(random);
})
 
$(document).ready (function() {

    var random = Math.floor(Math.random() * 12) +1;

    console.log(random);

    $("#green").text(random);
})

$(document).ready (function() {

    var random = Math.floor(Math.random() * 12) +1;

    console.log(random);

    $("#blue").text(random);
})

$(document).ready (function() {

    var random = Math.floor(Math.random() * 12) +1;

    console.log(random);

    $("#diamond").text(random);
})

// Click event added to images/random numbers.
$("#red").on("click", function() {
    console.log($(this));
})

$("#green").on("click", function() {
    console.log($(this));
})

$("#blue").on("click", function() {
    console.log($(this));
})

$("#diamond").on("click", function() {
    console.log($(this));
});



 var win;
 var lost;



//  I needed to create a variable to house the random numbers being clicked on. 
//  Then, use those numbers and create a function to add the numbers together that were cliked on. 
//  Then create an operator that would compare the numbers added to the Random number generated.
//  Create if/else statement in which the added numbers get compared and if they equal to the random generated number 
//     then add a win else add a lose.
// Once a win or lose are completed, reset the game and start all over.
