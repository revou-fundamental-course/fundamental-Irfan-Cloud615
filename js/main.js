let nama = prompt("Masukkan nama kamu:");
document.getElementById("name").innerText = nama;

// slideShow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// validate form

// value message
function TampilkanHasil() {
  let nm = document.getElementById("fname").value;
  let d = document.getElementById("lname").value;
  let gl = document.querySelector("#age2").value;
  let s = document.getElementById("subject").value;

  document.getElementById("n").innerText = nm;
  document.getElementById("date").innerText = d;
  document.getElementById("Kelamin").innerText = gl;
  document.getElementById("pesan").innerText = s;
}
