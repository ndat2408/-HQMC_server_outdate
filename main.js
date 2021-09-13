window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openmodal(){
  document.querySelector(".modal").style.display = "block"
}

function closemodal(){
  document.querySelector(".modal").style.display = "none"
}

function imgmodal(e){
  document.querySelector(".img_content img").src = e.src;
  document.querySelector(".img_modal").style.display = "block"
}

function closeimgmodal(){
  document.querySelector(".img_modal").style.display = "none"
}

function copy(e){
  navigator.clipboard.writeText("THPTHQ.aternos.me");
  e.classList.remove("fas")
  e.classList.add("far")
}