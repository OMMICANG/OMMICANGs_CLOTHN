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
      

// Main slider Effect {Credits > Web Dev @YouTube}
//selecting needed Elements
const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLenght = slideLeft.querySelectorAll('div').length;

// code for Image slide

let activeSlideIndex =0;

slideLeft.style.top = `-${(slidesLenght -1) * 100}%`;

//Adding Event Listener to Button

upButton.addEventListener('click', ()=> changeSlide('up'));
downButton.addEventListener('click', ()=> changeSlide('down'));

const changeSlide  = (direction)=> {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLenght -1){
            activeSlideIndex = 0;
        } 
    } else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLenght -1;
        }
    }

    slideRight.style.transform =  `translateY(-${
        activeSlideIndex * sliderHeight}px)`;

        slideLeft.style.transform =  `translateY(${
            activeSlideIndex * sliderHeight}px)`;
};

// End of SliderCode

// ---- H-SLIDER CODE STARTS HERE
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      
    },
  
  });
