function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click",sayThatWasEasy); 

$(document).keypress(delgateKeypress);
function delgateKeypress(event) {
   if (event.charCode == 32) {
   var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play(); 
}
}