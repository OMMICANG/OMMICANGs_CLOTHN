// DarkMode feature

var lightBulb = document.getElementById("button");
lightBulb.onclick = ()=>{
  document.body.classList.toggle("dark-mode");
  // lightBulb Icon change functionality
  //if(document.body.classList.contains("dark-mode")){
   // lightBulb.src = "./svgImages/darkModeSvg/sun.png";
  //} else {
   // lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
  }

//}

// DarkMode Feature ends Here

// Code Credits "Easy Tutorial" @YOUTUBE

var imgZoomContainer = document.getElementById("imgZoomContainer");
var imgZoom = document.getElementById("imgZoom");

function openImgZoom(pic) {
    imgZoomContainer.style.display = "flex";
    imgZoom.src = pic;
}

function closeImgZoom() {
    imgZoomContainer.style.display = "none";
}

// Button Inclusion Code Attempt..
