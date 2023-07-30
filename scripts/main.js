// when the document loads 

$(document).ready(function(){

    console.log("Hello")

    // --------------------------------------------------------------------------------
    // Home page 

    // when the image loads 
    $(".hero-image").animate({top: '-=100px'})

     // --------------------------------------------------------------------------------
    // Browse Page 

    $("#description-text").hide();

});

// when the card is clicked 

$(".card").click(function(){

// Toggle price and description text

$("#price-text").toggle();
$("description-text").toggle();

// Resize the image to fit additional content 
$(".card-image-top").toggleClass("small")

})

   