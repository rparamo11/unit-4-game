// This creates the random number at loading of document. 
$(document).ready (function() {

  var random = Math.floor(Math.random() * 101) + 19;

  console.log(random);

  $(".random-number").text(random);

 });

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

 var win;
 var lost;