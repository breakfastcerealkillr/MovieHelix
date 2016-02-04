var title1  = [];
var title2  = [];


var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("title2");


var messageBox  = document.getElementById("display");

function insert ( ) {
 title1.push( titleInput.value );
 title2 .push( nameInput.value );

  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  titleInput.value = "";
  nameInput.value = "";
  
  
  // Show our output
  messageBox.innerHTML = "";
  
  messageBox.innerHTML += "Title1: " + title1.join(", ") + "<br/>";
  messageBox.innerHTML += "Title2: " + title2.join(", ") + "<br/>";
 
}
