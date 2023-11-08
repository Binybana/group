
let name = "xys";
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 6000); // Change slide every 6 seconds
}

function validate(){
  name = document.getElementsByName("name");
  open_page();
}

function open_page(){
  window.open("home.html");
  }

function transfer(){
  // Define the variable
var data = "Hello, World!";

// Get the HTML element by its ID

document.getElementById("dataContainer").innerHTML = data;

// Update the element's content with the variable value
dataContainer.innerHTML = data;
}